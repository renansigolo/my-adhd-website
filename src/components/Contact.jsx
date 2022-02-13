import styles from "@styles/Contact.module.css"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FormattedMessage, useIntl } from "react-intl"
import CardSuccess from "./shared/CardSuccess"
import BulletsBackground from "./shared/ContactFormBgPattern"
import Spinner from "./shared/Spinner"

const FormComponent = (props) => {
  const {
    language,
    translated,
    register,
    onSubmit,
    handleSubmit,
    isLoading,
    errors
  } = props
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
          <div className="flex items-start ml-3">
            <p className="text-base text-gray-500">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                className="font-medium text-gray-700 underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                className="font-medium text-gray-700 underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Terms of Service
              </a>{' '}
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

export default function ContactForm() {
  // Get the current language to pre-define the select language field
  const router = useRouter()
  const language = router.locale.substring(0, 2)

  // Assign add the translated fields to variables
  const intl = useIntl()
  function translatedFormValues(id) {
    this.title = intl.formatMessage({ id: `contact.form.${id}.title` })
    this.placeholder = intl.formatMessage({
      id: `contact.form.${id}.placeholder`
    })
    this.error = intl.formatMessage({ id: `contact.form.${id}.error` })
  }
  const translated = {
    name: Object(new translatedFormValues("name")),
    email: Object(new translatedFormValues("email")),
    message: Object(new translatedFormValues("message"))
  }

  // Config React Hooks Form
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = async (data, event) => {
    const contactAPI = axios.create({
      baseURL: process.env.NEXT_PUBLIC_FIREBASE_URL
    })

    setIsLoading(true)
    // Send a POST request to Firebase Cloud Function
    try {
      await contactAPI.post("sendContactEmail", { ...data })
      setIsSuccess(true)
    } catch (error) {
      toast.error(
        error.message || intl.formatMessage({ id: `contact.form.error` })
      )
      console.error(error)
    } finally {
      setIsLoading(false)
      event.target.reset() // reset after form submit
    }
  }

  return (
    <section id="contact">
      <div className="lg:py-18 overflow-hidden bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-xl">
          <BulletsBackground />
          {!isLoading ? (
            !isSuccess ? (
              <FormComponent
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
