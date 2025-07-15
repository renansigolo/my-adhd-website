import { Contact } from "@/app/[locale]/(home)/Contact"
import { Disclaimer } from "@/app/[locale]/(home)/Disclaimer"
import { Download } from "@/app/[locale]/(home)/Download"
import { Hero } from "@/app/[locale]/(home)/Hero"
import { Highlights } from "@/app/[locale]/(home)/Highlights"
import { Banner } from "@/components/Banner"
import { Divider } from "@/components/Divider"

export default function Home() {
  return (
    <>
      <Banner />

      <main>
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
