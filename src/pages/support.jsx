import { ContainerSection } from "@/components/layout/Containers"
import { Footer } from "@/components/layout/Footer"
import { Faq } from "@/features/support/Faq"
import { FormattedMessage } from "react-intl"

const SupportHeader = () => {
  return (
    <ContainerSection center>
      <h2 className="mt-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <span className="block">
          <FormattedMessage id="support.title" />
        </span>
      </h2>
      <p className="mb-8 text-lg leading-6 text-gray-900">
        <FormattedMessage id="support.subtitle" />
      </p>
    </ContainerSection>
  )
}

export default function Support() {
  return (
    <>
      <SupportHeader />

      <Faq />

      <Footer />
    </>
  )
}
