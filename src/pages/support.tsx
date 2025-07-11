// import { ContainerSection } from "@/components/layout/Containers"
// import { Footer } from "@/components/layout/Footer"
// import { HeaderPage } from "@/components/layout/Headers"
// import { Navbar } from "@/components/layout/Navbar"
// import { getDocumentsIntl } from "@/lib/firebase"
// import { Faq } from "@/sections/support/Faq"
// import { GetStaticProps, InferGetStaticPropsType } from "next"

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

// export default function SupportPage({
//   faqs,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <>
//       <Navbar />

//       <SupportHeader />

//       <Faq faqs={faqs} />

//       <Footer />
//     </>
//   )
// }

// const SupportHeader = () => {
//   return (
//     <ContainerSection center>
//       <HeaderPage
//         id="support"
//         subTitle="How can we help you?"
//         title="Support"
//       />
//     </ContainerSection>
//   )
// }
