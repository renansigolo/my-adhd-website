import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Divider } from "@/components/shared/Divider"
import { Contact } from "@/sections/contact/Contact"
import { Disclaimer } from "@/sections/home/Disclaimer"
import { Download } from "@/sections/home/Download"
import { EnvironmentTag } from "@/sections/home/EnvironmentTag"
import { Hero } from "@/sections/home/Hero"
import { Highlights } from "@/sections/home/Highlights"
import Head from "next/head"

export default function Home() {
  const title = "My ADHD"
  const description = "The first ADHD app with cognitive analysis!"

  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>My ADHD Website</title>
        <meta content={`My ADHD Website - ${description}`} name="description" />
        <meta
          content="Adhd, adhd, tdah, diagnostic, medical, brain, AI"
          name="keywords"
        />
        <meta content="Renan Sigolo" name="author" />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content="https://myadhd.app/" property="og:url" />
        <meta key="ogsitename" content={title} property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content="https://myadhd.app/images/social-banner.png"
          property="og:image"
        />

        {/* Twitter */}
        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://myadhd.app/" property="twitter:url" />
        <meta content={title} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta
          content="https://myadhd.app/images/social-banner.png"
          property="twitter:image"
        />

        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          name="viewport"
        />
        <meta content="#ff4b88" name="theme-color" />
        <meta content="index, follow" name="robots" />
        <meta content="app-id=1375236150" name="apple-itunes-app" />

        <link href="/images/icons/icon-192x192.png" rel="apple-touch-icon" />
        <link href="/images/splash.png" rel="apple-touch-startup-image" />
        <link href="/manifest.json" rel="manifest" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </Head>

      <Navbar />

      <main>
        <EnvironmentTag />

        <Hero />

        <Highlights />

        <Disclaimer />

        <Download />

        <Divider />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
