import z from "zod/v4"

export type ContactFormState = {
  success: boolean
  message?: string
  errors?: [keyof ContactFormSchema][]
} | null

export const contactFormSchema = z.object({
  name: z.string().min(2).trim(),
  language: z.string(),
  email: z.email().trim(),
  message: z.string().min(20),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
