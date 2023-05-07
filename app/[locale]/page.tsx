"use client"

import { Footer } from "@/components/layout/Footer"
import { Divider } from "@/components/shared/Divider"
import { Locale } from "@/lib/i18n-config"
import { Contact } from "./(home)/Contact"
import { Disclaimer } from "./(home)/Disclaimer"
import { Download } from "./(home)/Download"
import { EnvironmentTag } from "./(home)/EnvironmentTag"
import { Hero } from "./(home)/Hero"
import { Highlights } from "./(home)/Highlights"

type IndexPageProps = {
  params: {
    locale: Locale
  }
}

export default function IndexPage({ params: { locale } }: IndexPageProps) {
  return (
    <div>
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
    </div>
  )
}
