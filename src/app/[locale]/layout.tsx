import { Footer } from "@/components/layout/Footer"
import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { Baloo_2 } from "next/font/google"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

import "@/styles/globals.css" // Ensure to import your global styles
// import "@/app/globals.css"
// const { NODE_ENV, SITE_URL } = process.env
// const isProduction = NODE_ENV === "production"

// export const viewport: Viewport = {
//   themeColor: "light",
// }

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
})

export const metadata: Metadata = {
  // metadataBase: new URL(SITE_URL!),
  title: {
    default: "My ADHD",
    template: "My ADHD | %s",
  },
  applicationName: "My ADHD",
  description: "A comprehensive resource for understanding and managing ADHD.",
  authors: { name: "Renan Sigolo", url: "https://renansigolo.com" },
  creator: "Renan Sigolo",
  // robots: {
  //   index: isProduction,
  //   follow: isProduction,
  // },
  // appleWebApp: {
  //   title: "SXPO",
  //   statusBarStyle: "default",
  // },
  // openGraph: {
  //   title: "SXPO",
  //   siteName: "SXPO",
  //   description: "SXPO",
  //   url: SITE_URL,
  //   locale: "en-AU",
  //   type: "website",
  //   images: {
  //     url: `${SITE_URL}/opengraph-image.jpg`,
  //     width: 1200,
  //     height: 627,
  //     alt: "SXPO Open Graph Image",
  //   },
  // },
  // twitter: {
  //   title: "SXPO",
  //   description:
  //     "The ultimate showcase of all things sexuality and relationships.",
  //   creator: "@renan_sigolo",
  //   creatorId: "23168747",
  //   images: `${SITE_URL}/opengraph-image.jpg`,
  // },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${baloo.variable} font-sans antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Footer />

        <Toaster position="top-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
