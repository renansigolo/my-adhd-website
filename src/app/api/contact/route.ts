import { ContactFormSchema } from "@/app/[locale]/(home)/Contact"
import {
  SendEmailCommand,
  SendEmailCommandInput,
  SESv2Client,
} from "@aws-sdk/client-sesv2"

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

function mapLanguageCodeToName(
  languageCode: ContactFormSchema["language"],
): string {
  switch (languageCode) {
    case "es":
      return "Spanish"
    case "pt":
      return "Portuguese"
    case "en":
      return "English"
    default:
      return "English"
  }
}

export async function POST(request: Request) {
  const body: ContactFormSchema = await request.json()

  body.language = mapLanguageCodeToName(body.language)

  const emailText = `New message from My ADHD Website!\n\nName: ${body.name}\nEmail: ${body.email}\nLanguage: ${body.language}\nMessage: ${body.message}`

  const emailHtml = `
  <h2>New message from My ADHD Website!</h2>
  <p><b>Name: </b>${body.name}</p>
  <p><b>Email: </b>${body.email}</p>
  <p><b>Language: </b>${body.language}</p>
  <p><b>Message: </b>${body.message}</p>
  `

  const mailOptions: SendEmailCommandInput = {
    FromEmailAddress: "noreply@myadhd.app",
    ReplyToAddresses: [body.email],
    Destination: {
      ToAddresses: ["renan.sigolo@gmail.com"],
    },
    Content: {
      Simple: {
        Subject: {
          Data: `My ADHD Website | Contact from ${body.name}`,
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
    return Response.json({ message: "OK" }, { status: 200 })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected exception"
    return new Response(message, { status: 500 })
  }
}
