import { ContainerSection } from "@/components/layout/Containers"
import { Footer } from "@/components/layout/Footer"
import { HeaderPage } from "@/components/layout/Headers"
import { Navbar } from "@/components/layout/Navbar"
import { Faq } from "@/sections/support/Faq"

export async function getStaticProps() {
  return {
    props: {
      faqs: [
        {
          title: "How can I delete my account?",
          description:
            "The option to delete your account is an irreversible action. You will lose all your data and once it's completed you won't be able to restore it. That said, you'll be able to find the delete button in your profile page inside the More tab of the app."
        },
        {
          title: "Why the delete account option is so hidden?",
          description:
            "That's a good question, and you've probably have already guessed the answer, if not, the simple and most honest answer is... because no application wants you to stop using their services, plase don't get me wrong and allow me to explain. As a developer (and a company) we spend hundreads if not thousands of hours of our time to create something amazing, for FREE and at the best way posssible that will enrich people's life - so it's only reasonable that we want people to use this product that we so passionately developed. I hope that helps explain a little bit more the reason behind this decision and if yet, you still choose to do it, this option is available to you in a completely automated and secure way which will permanently delete all records associate to your account from our servers."
        },
        {
          title:
            "Once I've deleted my account can I sign-in back in the future?",
          description:
            "Yes, you can - but bear in mind that there's no way to restore the data of your previously deleted account. We don not keep backups of your data or any sort of information related to it once it's been deleted. For more details on how your data is handled, please visit our Privacy Policy page."
        }
      ]
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
