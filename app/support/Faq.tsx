import { getDocumentsIntl } from "@/lib/firebase"
import { FormattedMessage } from "react-intl"
import FaqList from "./FaqList"

export async function getDocuments({ locale }) {
  const faqList = await getDocumentsIntl("faq", locale)
  return faqList
}

export async function Faq() {
  const faqs = await getDocuments({ locale: "en" })

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <FormattedMessage
              defaultMessage={"Frequently asked questions"}
              id={"faq.title"}
            />
          </h2>
          <FaqList faqs={faqs} />
        </div>
      </div>
    </div>
  )
}
