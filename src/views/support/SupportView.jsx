import { Faq } from "@components/Faq"
import { FormattedMessage } from "react-intl"

/* This example requires Tailwind CSS v2.0+ */
export function SupportView() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-24 lg:px-8">
        <h2 className="mt-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">
            <FormattedMessage id="support.title" />
          </span>
        </h2>
        <p className="mb-8 text-lg leading-6 text-gray-900">
          <FormattedMessage id="support.subtitle" />
        </p>
      </div>
      <Faq />
    </>
  )
}
