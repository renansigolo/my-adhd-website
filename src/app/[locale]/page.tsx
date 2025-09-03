import { Contact } from "@/app/[locale]/(home)/Contact"
import { Disclaimer } from "@/app/[locale]/(home)/Disclaimer"
import { Download } from "@/app/[locale]/(home)/Download"
import { Hero } from "@/app/[locale]/(home)/Hero"
import { Highlights } from "@/app/[locale]/(home)/Highlights"
import { Banner } from "@/components/Banner"
import { Divider } from "@/components/Divider"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export default function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <>
      <main>
        <Banner />

        <Hero />

        <Highlights />

        <Disclaimer />

        <Download />

        <Divider />

        <Contact />
      </main>
    </>
  )
}
