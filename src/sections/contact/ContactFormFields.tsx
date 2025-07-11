"use client"

import { ContactFormSchema } from "@/sections/contact/Contact"
import { FormEvent } from "react"
import { UseFormRegister } from "react-hook-form"
import { FormattedMessage } from "react-intl"

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

type ContactFormFieldsProps = {
  language: string
  translated: {
    name: { placeholder: string; error: string }
    email: { placeholder: string; error: string }
    message: { placeholder: string; error: string }
  }
  register: UseFormRegister<ContactFormSchema>
  onSubmit: (
    data: ContactFormSchema,
    event: FormEvent<HTMLFormElement>,
  ) => Promise<void>
  handleSubmit: any
  isLoading: boolean
  errors: Record<string, any>
}

/** Render the ContactForm fields */
export const ContactFormFields = ({
  language,
  translated,
  register,
  onSubmit,
  handleSubmit,
  isLoading,
  errors,
}: ContactFormFieldsProps) => {
  return (
    <div className="my-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <FormattedMessage id="contact.title" />
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          <FormattedMessage id="contact.subtitle" />
        </p>
      </div>
      <form
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className={styles.formLabel} htmlFor="name">
            <FormattedMessage id="contact_form.name.title" />
          </label>
          <div className="mt-1" data-test="form-name">
            <input
              autoComplete="given-name"
              className={styles.formField}
              disabled={isLoading}
              id="name"
              placeholder={translated.name.placeholder}
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className={styles.errorLabel}>{translated.name.error}</p>
            )}
          </div>
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="language">
            <FormattedMessage id="contact_form.language.title" />
          </label>
          <div className="mt-1">
            <label className="sr-only" htmlFor="language">
              <FormattedMessage id="contact_form.language.title" />
            </label>
            <select
              className={styles.formSelect}
              defaultValue={language}
              disabled={isLoading}
              id="language"
              {...register("language", { required: true })}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={styles.formLabel} htmlFor="email">
            <FormattedMessage id="contact_form.email.title" />
          </label>
          <div className="mt-1" data-test="form-email">
            <input
              autoComplete="email"
              className={styles.formField}
              disabled={isLoading}
              id="email"
              placeholder={translated.email.placeholder}
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={styles.errorLabel}>{translated.email.error}</p>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={styles.formLabel} htmlFor="message">
            <FormattedMessage id="contact_form.message.title" />
          </label>
          <div className="mt-1" data-test="form-textarea">
            <textarea
              className={styles.formField}
              defaultValue={""}
              disabled={isLoading}
              id="message"
              placeholder={translated.message.placeholder}
              rows={4}
              {...register("message", { required: true, minLength: 20 })}
            />
            {errors.message && (
              <p className={styles.errorLabel}>{translated.message.error}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <button
            className={styles.btnSubmit}
            disabled={isLoading}
            type="submit"
          >
            <FormattedMessage id="contact.submit" />
          </button>
        </div>
      </form>
    </div>
  )
}
