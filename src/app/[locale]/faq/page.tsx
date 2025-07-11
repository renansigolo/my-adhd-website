import { ContainerSection } from "@/components/Containers"
import { HeaderPage } from "@/components/Headers"
import { Navbar } from "@/components/Navbar"

// export const getStaticProps = (async ({ locale }) => {
//   const faqList = await getDocumentsIntl("faq", locale || "en")

//   return {
//     props: {
//       faqs: faqList,
//     },
//   }
// }) satisfies GetStaticProps<{
//   faqs: any[]
// }>

const faqs = [
  {
    title: "What is ADHD?",
    description:
      "ADHD stands for Attention Deficit Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults.",
  },
  {
    title: "How can I manage my ADHD symptoms?",
    description:
      "Managing ADHD symptoms can include medication, therapy, lifestyle changes, and support from family and friends.",
  },
  {
    title: "Where can I find more resources on ADHD?",
    description:
      "You can find more resources on ADHD through medical professionals, support groups, and reputable websites dedicated to ADHD.",
  },
]

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <ContainerSection center>
        <HeaderPage
          id="support"
          subTitle="How can we help you?"
          title="Support"
        >
          <p className="text-lg text-gray-700">
            This is the FAQ page. Here you can find answers to common questions.
          </p>
        </HeaderPage>
      </ContainerSection>

      {/* <Faq faqs={faqs} /> */}
    </>
  )
}
