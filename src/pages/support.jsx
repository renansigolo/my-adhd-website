import { ContainerSection } from "@/components/layout/Containers"
import { Footer } from "@/components/layout/Footer"
import { HeaderPage } from "@/components/layout/Headers"
import { Faq } from "@/features/support/Faq"

const SupportHeader = () => {
  return (
    <ContainerSection center>
      <HeaderPage
        showHome
        id="support"
        subTitle="How can we help you?"
        title="Support"
      />
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
