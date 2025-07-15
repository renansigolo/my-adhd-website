import { Container } from "@/components/Container"
import { Navbar } from "@/components/Navbar"
import { Subtitle } from "@/components/Subtitle"
import { Title } from "@/components/Title"

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

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <Container center>
        <Title>Support</Title>
        <Subtitle>Here you can find answers to common questions.</Subtitle>
      </Container>

      {/* <Faq faqs={faqs} /> */}
    </>
  )
}
