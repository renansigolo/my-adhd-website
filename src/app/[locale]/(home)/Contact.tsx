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
    title: t("contact_title"),
    subtitle: t("contact_subtitle"),
    language: t("contact_form_language_title"),
    name: translatedFormValues("name"),
    email: translatedFormValues("email"),
    message: translatedFormValues("message"),
    submit: t("contact_submit"),
  }

  return (
    <section id="contact">
      <div className="overflow-hidden bg-gray-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="relative mx-auto max-w-xl">
          <BulletsBackground />
          <ContactForm locale={locale} translated={translated} />
        </div>
      </div>
    </section>
  )
}
