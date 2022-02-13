import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useIntl } from "react-intl"
import { ContactFormFields } from "src/views/contact/ContactFormFields"
import CardSuccess from "./shared/CardSuccess"
import BulletsBackground from "./shared/ContactFormBgPattern"
import Spinner from "./shared/Spinner"

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
