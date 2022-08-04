import { Footer } from "@/components/layout/Footer"
import { Divider } from "@/components/shared/Divider"
import { PageMetadata } from "@/components/shared/PageMetadata"
import { Contact } from "@/sections/contact/Contact"
import { Disclaimer } from "@/sections/home/Disclaimer"
import { Download } from "@/sections/home/Download"
import { EnvironmentTag } from "@/sections/home/EnvironmentTag"
import { Hero } from "@/sections/home/Hero"
import { Highlights } from "@/sections/home/Highlights"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <PageMetadata />
      </Head>

      {/* <Navbar /> */}

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
