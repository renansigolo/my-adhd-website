import { Container } from "@/components/Container"
import { Navbar } from "@/components/Navbar"
import { Title } from "@/components/Title"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export default function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale)

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
