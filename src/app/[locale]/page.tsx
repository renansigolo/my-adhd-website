import { Banner } from "@/components/layout/Banner"
import { Footer } from "@/components/layout/Footer"
import { Metatags } from "@/components/Metatags"
import { Divider } from "@/components/shared/Divider"
import { Contact } from "@/sections/contact/Contact"
import { Disclaimer } from "@/sections/home/Disclaimer"
import { Download } from "@/sections/home/Download"
import { EnvironmentTag } from "@/sections/home/EnvironmentTag"
import { Hero } from "@/sections/home/Hero"
import { Highlights } from "@/sections/home/Highlights"

export default function Home() {
  return (
    <>
      <Metatags />

      <Banner />

      <main>
        <Hero />

        <Highlights />

        <Disclaimer />

        <Download />

        <Divider />

        <Contact />
      </main>

      <Footer />

      <EnvironmentTag />
    </>
  )
}
