import { Container } from "@/components/Container"
import { Navbar } from "@/components/Navbar"
import { Title } from "@/components/Title"
import { useTranslations } from "next-intl"

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage")

  return (
    <>
      <Navbar />
      <Container>
        <Title>{t("title")}</Title>
        <article
          dangerouslySetInnerHTML={{ __html: t.raw("content") }}
          className="prose mt-4 max-w-none"
        />
      </Container>
    </>
  )
}
