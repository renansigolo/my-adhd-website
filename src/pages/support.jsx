import { ContainerSection } from "@/components/layout/Containers"
import { Footer } from "@/components/layout/Footer"
import { HeaderPage } from "@/components/layout/Headers"
import { Navbar } from "@/components/layout/Navbar"
import { getDocuments } from "@/lib/firebase"
import { Faq } from "@/sections/support/Faq"

export async function getStaticProps() {
  const faqList = await getDocuments("faq")

  return {
    props: {
      faqs: faqList
    }
  }
}

const SupportHeader = () => {
  return (
    <ContainerSection center>
      <HeaderPage
        id="support"
        subTitle="How can we help you?"
        title="Support"
      />
    </ContainerSection>
  )
}

export default function Support({ faqs }) {
  return (
    <>
      <Navbar />

      <SupportHeader />

      <Faq faqs={faqs} />

      <Footer />
    </>
  )
}
