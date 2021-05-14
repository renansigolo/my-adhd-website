import Head from "next/head"
import React from "react"
import Contact from "../components/Contact"
import Disclaimer from "../components/Disclaimer"
import Download from "../components/Download"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Divider from "../components/shared/Divider"

/** Display a development badge to identify the current environment being used */
function EnvTag() {
  return (
    <div className="fixed bottom-5 left-5">
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 opacity-70">
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
    <>
      <div>
        <Head>
          {/* Primary Meta Tags */}
          <title>My ADHD Website</title>
          <meta
            name="description"
            content={`My ADHD Website - ${description}`}
          />
          <meta
            name="keywords"
            content="Adhd, adhd, tdah, diagnostic, medical, brain, AI"
          />
          <meta name="author" content="Renan Sigolo" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://myadhd.app/" />
          <meta property="og:site_name" content={title} key="ogsitename" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://myadhd.app/images/social-banner.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://myadhd.app/" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta
            property="twitter:image"
            content="https://myadhd.app/images/social-banner.png"
          />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#ff4b88" />
          <meta name="robots" content="index, follow" />
          <meta name="apple-itunes-app" content="app-id=1375236150" />
          <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
          <link rel="apple-touch-startup-image" href="/images/splash.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
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

        <Divider />

        <Footer />
      </div>
    </>
  )
}
