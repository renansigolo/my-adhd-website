import { contactFormSchema, ContactFormSchema } from "@/lib/types"
import {
  SendEmailCommand,
  SendEmailCommandInput,
  SESv2Client,
} from "@aws-sdk/client-sesv2"
import z from "zod/v4"

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

export async function POST(request: Request) {
  const body: ContactFormSchema = await request.json()

  // Validate the request body against the schema
  const { success, error, data } = contactFormSchema.safeParse(body)
  if (!success) {
    const flattened = z.flattenError(error)
    const fieldErrorKeys = Object.keys(flattened.fieldErrors)

    return new Response(
      JSON.stringify({
        success: false,
        message: error.message,
        errors: fieldErrorKeys,
      }),
      { status: 400 },
    )
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

  const mailOptions: SendEmailCommandInput = {
    FromEmailAddress: "noreply@myadhd.app",
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
    await sesClient.send(new SendEmailCommand(mailOptions))
    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected exception"
    return new Response(message, { status: 500 })
  }
}
