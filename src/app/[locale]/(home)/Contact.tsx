import { ContactForm } from "@/app/[locale]/(home)/ContactForm"
import { BulletsBackground } from "@/components/ContactFormBgPattern"
import { useLocale, useTranslations } from "next-intl"

export function Contact() {
  const locale = useLocale()

  const t = useTranslations("HomePage")
  const translatedFormValues = (id: string) => ({
    title: t(`contact_form_${id}_title`),
    placeholder: t(`contact_form_${id}_placeholder`),
    error: t(`contact_form_${id}_error`),
  })
  const translated = {
    language: t("contact_form_language_title"),
    name: translatedFormValues("name"),
    email: translatedFormValues("email"),
    message: translatedFormValues("message"),
    submit: t("contact_submit"),
  }

  return (
    <section id="contact">
      <div className="overflow-hidden bg-gray-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="relative mx-auto my-6 max-w-xl">
          <BulletsBackground />

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("contact_title")}
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              {t("contact_subtitle")}
            </p>
          </div>

          <ContactForm locale={locale} translated={translated} />
        </div>
      </div>
    </section>
  )
}
