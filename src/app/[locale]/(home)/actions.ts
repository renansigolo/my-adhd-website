"use server"

import {
  contactFormSchema,
  ContactFormSchema,
} from "@/app/[locale]/(home)/types"
import {
  SendEmailCommand,
  SendEmailCommandInput,
  SESv2Client,
} from "@aws-sdk/client-sesv2"
import { z } from "zod/v4"

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const intlDisplayName = (locale: ContactFormSchema["language"]): string =>
  new Intl.DisplayNames("en", {
    type: "language",
    languageDisplay: "standard",
  }).of(locale) ?? locale

export async function sendContactEmail(formData: ContactFormSchema) {
  const { success, error, data } = contactFormSchema.safeParse(formData)
  if (!success) {
    const flattened = z.flattenError(error)
    const fieldErrorKeys = Object.keys(flattened.fieldErrors)

    return {
      success: false,
      message: error.message,
      errors: fieldErrorKeys as (keyof ContactFormSchema)[],
    }
  }

  data.language = intlDisplayName(data.language)

  const emailText = `New message from My ADHD Website!\n\nName: ${data.name}\nEmail: ${data.email}\nLanguage: ${data.language}\nMessage: ${data.message}`
  const emailHtml = `
  <h2>New message from My ADHD Website!</h2>
  <p><b>Name: </b>${data.name}</p>
  <p><b>Email: </b>${data.email}</p>
  <p><b>Language: </b>${data.language}</p>
  <p><b>Message: </b>${data.message}</p>
  `

  const emailInputs: SendEmailCommandInput = {
    FromEmailAddress: "no-reply@myadhd.app",
    ReplyToAddresses: [data.email],
    Destination: {
      ToAddresses: ["renan.sigolo@gmail.com"],
    },
    Content: {
      Simple: {
        Subject: {
          Data: `My ADHD Website | Contact from ${data.name}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: emailText,
            Charset: "UTF-8",
          },
          Html: {
            Data: emailHtml,
            Charset: "UTF-8",
          },
        },
      },
    },
  }

  try {
    const command = new SendEmailCommand(emailInputs)
    const result = await sesClient.send(command)

    return { success: true, message: result.MessageId }
  } catch (error) {
    console.error("Error sending email:", error)
    const message =
      error instanceof Error ? error.message : "Unexpected exception"

    return {
      success: false,
      message,
    }
  }
}
