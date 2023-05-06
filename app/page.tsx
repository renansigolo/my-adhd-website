"use client"

import { Footer } from "@/components/layout/Footer"
import { Divider } from "@/components/shared/Divider"
import { Locale } from "@/lib/i18n-config"
import { Disclaimer } from "./(home)/Disclaimer"
import { Download } from "./(home)/Download"
import { EnvironmentTag } from "./(home)/EnvironmentTag"
import { Hero } from "./(home)/Hero"
import { Highlights } from "./(home)/Highlights"
import "./globals.css"

type IndexPageProps = {
  params: {
    lang: Locale
  }
}

export default async function IndexPage({ params: { lang } }: IndexPageProps) {
  return (
    <div>
      <p>Current locale: {lang}</p>

      <main>
        <Hero />

        <Highlights />

        <Disclaimer />

        <Download />

        <Divider />

        {/* <Contact /> */}
      </main>

      <Footer />

      <EnvironmentTag />
    </div>
  )
}
