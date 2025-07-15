"use client"

import { CardSuccess } from "@/components/CardSuccess"
import { Spinner } from "@/components/Spinner"
import { showErrorMessage } from "@/lib/helpers"
import { ContactFormSchema, contactFormSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Locale } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"

const styles = {
  formLabel: "block text-sm font-medium text-gray-700",
  formField:
    "block w-full rounded-md border-gray-300 px-4 py-3 shadow-xs focus:border-purple-500 focus:ring-purple-500",
  formSelect:
    "w-full rounded-md border-gray-300 px-4 py-3 shadow-xs text-gray-500 focus:border-purple-500 focus:ring-purple-500",
  errorLabel: "mt-2 ml-2 text-red-900",
  btnSubmit:
    "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-pink-700 hover:cursor-pointer focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-hidden",
}

type ContactFormProps = {
  locale: Locale
  translated: {
    title: string
    subtitle: string
    language: string
    name: { title: string; placeholder: string; error: string }
    email: { title: string; placeholder: string; error: string }
    message: { title: string; placeholder: string; error: string }
    submit: string
  }
}

/** Render the ContactForm fields */
export const ContactForm = ({ locale, translated }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    if (!isValid) {
      showErrorMessage("Please fill out all required fields correctly.")
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const responseData = await response.json()
        if (responseData.errors) {
          for (const errorField of responseData.errors) {
            setError(errorField, { type: "root.serverError" })
          }
        }

        return
      }

      setIsSuccess(true)
      reset()
    } catch (error) {
      showErrorMessage(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="my-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {translated.title}
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          {translated.subtitle}
        </p>
      </div>

      {isSubmitting ? (
        <div className="grid h-96 place-items-center">
          <Spinner show />
        </div>
      ) : isSuccess ? (
        <CardSuccess />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            disabled={isSubmitting}
          >
            <div>
              <label className={styles.formLabel} htmlFor="name">
                {translated.name.title}
              </label>
              <div className="mt-1" data-test="form-name">
                <input
                  autoComplete="given-name"
                  className={styles.formField}
                  id="name"
                  placeholder={translated.name.placeholder}
                  type="text"
                  {...register("name")}
                />
                {errors.name && (
                  <p className={styles.errorLabel}>{translated.name.error}</p>
                )}
              </div>
            </div>

            <div>
              <label className={styles.formLabel} htmlFor="language">
                {translated.language}
              </label>
              <div className="mt-1">
                <label className="sr-only" htmlFor="language">
                  {translated.language}
                </label>
                <select
                  className={styles.formSelect}
                  defaultValue={locale}
                  id="language"
                  {...register("language")}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="pt">Português</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className={styles.formLabel} htmlFor="email">
                {translated.email.title}
              </label>
              <div className="mt-1" data-test="form-email">
                <input
                  autoComplete="email"
                  className={styles.formField}
                  id="email"
                  placeholder={translated.email.placeholder}
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className={styles.errorLabel}>{translated.email.error}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className={styles.formLabel} htmlFor="message">
                {translated.message.title}
              </label>
              <div className="mt-1" data-test="form-textarea">
                <textarea
                  className={styles.formField}
                  defaultValue={""}
                  id="message"
                  placeholder={translated.message.placeholder}
                  rows={4}
                  {...register("message")}
                />
                {errors.message && (
                  <p className={styles.errorLabel}>
                    {translated.message.error}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <button className={styles.btnSubmit} type="submit">
                {translated.submit}
              </button>
            </div>

            {errors?.root?.serverError.type === 400 && (
              <p>server response message</p>
            )}
          </fieldset>
        </form>
      )}
    </div>
  )
}
