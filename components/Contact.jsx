import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FormattedMessage, useIntl } from "react-intl"
import BulletsBackground from "./shared/ContactFormBgPattern"
import CardSuccess from "./shared/CardSuccess"
import Spinner from "./shared/Spinner"
import styles from "../styles/Contact.module.css"

const FormComponent = ({
  language,
  translated,
  register,
  onSubmit,
  handleSubmit,
  isLoading,
  errors,
}) => {
  return (
    <div className="my-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <FormattedMessage id="contact.title" />
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          <FormattedMessage id="contact.subtitle" />
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label htmlFor="name" className={styles.formLabel}>
            <FormattedMessage id="contact.form.name.title" />
          </label>
          <div className="mt-1" data-test="form-name">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              placeholder={translated.name.placeholder}
              disabled={isLoading}
              className={styles.formField}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className={styles.errorLabel}>{translated.name.error}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="language" className={styles.formLabel}>
            <FormattedMessage id="contact.form.language.title" />
          </label>
          <div className="mt-1">
            <label htmlFor="language" className="sr-only">
              <FormattedMessage id="contact.form.language.title" />
            </label>
            <select
              id="language"
              name="language"
              defaultValue={language}
              disabled={isLoading}
              className={styles.formSelect}
              {...register("language", { required: true })}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={styles.formLabel}>
            <FormattedMessage id="contact.form.email.title" />
          </label>
          <div className="mt-1" data-test="form-email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={translated.email.placeholder}
              disabled={isLoading}
              className={styles.formField}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={styles.errorLabel}>{translated.email.error}</p>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={styles.formLabel}>
            <FormattedMessage id="contact.form.message.title" />
          </label>
          <div className="mt-1" data-test="form-textarea">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={styles.formField}
              defaultValue={""}
              placeholder={translated.message.placeholder}
              disabled={isLoading}
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
            type="submit"
            disabled={isLoading}
            className={styles.btnSubmit}
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
      id: `contact.form.${id}.placeholder`,
    })
    this.error = intl.formatMessage({ id: `contact.form.${id}.error` })
  }
  const translated = {
    name: Object(new translatedFormValues("name")),
    email: Object(new translatedFormValues("email")),
    message: Object(new translatedFormValues("message")),
  }

  // Config React Hooks Form
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, event) => {
    const contactAPI = axios.create({
      baseURL: process.env.NEXT_PUBLIC_FIREBASE_URL,
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
      <div className="bg-gray-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-18">
        <div className="relative max-w-xl mx-auto">
          <BulletsBackground />
          {!isLoading ? (
            !isSuccess ? (
              <FormComponent
                language={language}
                translated={translated}
                register={register}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                errors={errors}
              />
            ) : (
              <CardSuccess />
            )
          ) : (
            <div className="h-96 grid place-items-center">
              <Spinner show />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
