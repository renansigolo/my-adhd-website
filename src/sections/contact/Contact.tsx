"use client"

import { CardSuccess } from "@/components/shared/CardSuccess"
import { BulletsBackground } from "@/components/shared/ContactFormBgPattern"
import { Spinner } from "@/components/shared/Spinner"
import { showErrorMessage } from "@/lib/helpers"
import { ContactFormFields } from "@/sections/contact/ContactFormFields"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { useIntl } from "react-intl"

export type ContactFormSchema = {
  name: string
  email: string
  message: string
  language: "en" | "es" | "pt"
}

export function Contact() {
  // Get the current language to pre-define the select language field
  const router = useRouter()
  const language = router.locale?.substring(0, 2) || "en"

  // Assign add the translated fields to variables
  const intl = useIntl()
  const translatedFormValues = (id: string) => ({
    title: intl.formatMessage({ id: `contact_form.${id}.title` }),
    placeholder: intl.formatMessage({
      id: `contact_form.${id}.placeholder`,
    }),
    error: intl.formatMessage({ id: `contact_form.${id}.error` }),
  })
  const translated = {
    name: translatedFormValues("name"),
    email: translatedFormValues("email"),
    message: translatedFormValues("message"),
  }

  // Config React Hooks Form
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormSchema>()

  const onSubmit = async (
    data: ContactFormSchema,
    event: FormEvent<HTMLFormElement>,
  ) => {
    setIsLoading(true)

    // Send a POST request to Firebase Cloud Function
    try {
      const response = await fetch(
        String(process.env.NEXT_PUBLIC_FIREBASE_EMAIL_FUNCTION_URL),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setIsSuccess(true)
    } catch (error) {
      showErrorMessage(error)
      console.error(error)
    } finally {
      setIsLoading(false)
      ;(event.target as HTMLFormElement).reset()
    }
  }

  return (
    <section id="contact">
      <div className="overflow-hidden bg-gray-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="relative mx-auto max-w-xl">
          <BulletsBackground />
          {!isLoading ? (
            !isSuccess ? (
              <ContactFormFields
                errors={errors}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                language={language}
                register={register}
                translated={translated}
                onSubmit={onSubmit}
              />
            ) : (
              <CardSuccess />
            )
          ) : (
            <div className="grid h-96 place-items-center">
              <Spinner show />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
