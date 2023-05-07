"use client"

import { FormattedMessage } from "react-intl"
import styles from "./ContactForm.module.css"

/** Render the ContactForm fields */
export const ContactForm = ({
  language,
  translated,
  register,
  onSubmit,
  handleSubmit,
  isLoading,
  errors
}) => {
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
            <FormattedMessage id="contact.form.name.title" />
          </label>
          <div className="mt-1" data-test="form-name">
            <input
              autoComplete="given-name"
              className={styles.formField}
              disabled={isLoading}
              id="name"
              name="name"
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
            <FormattedMessage id="contact.form.language.title" />
          </label>
          <div className="mt-1">
            <label className="sr-only" htmlFor="language">
              <FormattedMessage id="contact.form.language.title" />
            </label>
            <select
              className={styles.formSelect}
              defaultValue={language}
              disabled={isLoading}
              id="language"
              name="language"
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
            <FormattedMessage id="contact.form.email.title" />
          </label>
          <div className="mt-1" data-test="form-email">
            <input
              autoComplete="email"
              className={styles.formField}
              disabled={isLoading}
              id="email"
              name="email"
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
            <FormattedMessage id="contact.form.message.title" />
          </label>
          <div className="mt-1" data-test="form-textarea">
            <textarea
              className={styles.formField}
              defaultValue={""}
              disabled={isLoading}
              id="message"
              name="message"
              placeholder={translated.message.placeholder}
              rows={4}
              {...register("message", { required: true, minLength: 20 })}
            />
            {errors.message && (
              <p className={styles.errorLabel}>{translated.message.error}</p>
            )}
          </div>
        </div>
        {/* <div className="sm:col-span-2">
          <div className="ml-3 flex items-start">
            <p className="text-base text-gray-500">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                className="font-medium text-gray-700 underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className="font-medium text-gray-700 underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div> */}

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
