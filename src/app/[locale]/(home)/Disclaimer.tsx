import { useTranslations } from "next-intl"

import { Container } from "@/components/Container"

export function Disclaimer() {
  const t = useTranslations("HomePage")

  return (
    <section className="bg-linear-to-tl from-purple-800 to-pink-500 text-center">
      <Container>
        <p aria-required className="text-2xl text-white">
          {t.rich("disclaimer_title", {
            br: () => <br />,
          })}
        </p>
      </Container>
    </section>
  )
}
