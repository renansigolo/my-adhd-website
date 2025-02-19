import { CardSuccess } from "@/components/shared/CardSuccess"
import { BulletsBackground } from "@/components/shared/ContactFormBgPattern"
import { Spinner } from "@/components/shared/Spinner"
import { ContactFormFields } from "@/sections/contact/ContactFormFields"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useIntl } from "react-intl"

export function Contact() {
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
    setIsLoading(true)

    // Send a POST request to Firebase Cloud Function
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FIREBASE_EMAIL_FUNCTION_URL,
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
      toast.error(
        error.message || intl.formatMessage({ id: `contact.form.error` }),
      )
      console.error(error)
    } finally {
      setIsLoading(false)
      event.target.reset()
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
