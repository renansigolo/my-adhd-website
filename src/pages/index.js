import { Footer } from "@components/layout/Footer"
import { Divider } from "@components/shared/Divider"
import Head from "next/head"
import Contact from "src/features/contact/Contact"
import Disclaimer from "src/features/home/Disclaimer"
import Download from "src/features/home/Download"
import Features from "src/features/home/Features"
import Hero from "src/features/home/Hero"

/** Display a development badge to identify the current environment being used */
function EnvTag() {
  return (
    <div className="fixed bottom-5 left-5">
      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800 opacity-70">
        {process.env.NODE_ENV.toUpperCase()}
      </span>
    </div>
  )
}

export default function Home() {
  const isProd = process.env.NODE_ENV === "production" ? true : false
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
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        {isProd ? null : <EnvTag />}

        <Hero />

        <Features />

        <Disclaimer />

        <Download />

        <Divider />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}