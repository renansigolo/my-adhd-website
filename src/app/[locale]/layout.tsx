import { Footer } from "@/components/Footer"
import { routing } from "@/i18n/routing"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Baloo_2 } from "next/font/google"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

import "@/app/globals.css"

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
})

export const viewport: Viewport = {
  themeColor: "#ec4899",
  colorScheme: "light",
  minimumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://myadhd.app"),
  title: {
    default: "My ADHD",
    template: "My ADHD | %s",
  },
  applicationName: "My ADHD",
  description:
    "The first ADHD app with cognitive analysis for people with ADHD!",
  keywords: ["adhd", "tdah", "diagnostics", "medical", "brain"],
  authors: { name: "Renan Sigolo", url: "https://renansigolo.com" },
  creator: "Renan Sigolo",
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: "My ADHD",
    statusBarStyle: "black-translucent",
  },
  itunes: {
    appId: "1375236150",
  },
  openGraph: {
    title: "My ADHD",
    siteName: "My ADHD",
    description:
      "The first ADHD app with cognitive analysis for people with ADHD!",
    url: "https://myadhd.app",
    locale: "en-AU",
    type: "website",
    images: {
      url: "https://myadhd.app/opengraph-image.jpg",
      width: 1200,
      height: 627,
      alt: "My ADHD Open Graph Image",
    },
  },
  twitter: {
    title: "My ADHD",
    description:
      "The first ADHD app with cognitive analysis for people with ADHD!",
    creator: "@renan_sigolo",
    creatorId: "23168747",
    images: "https://myadhd.app/opengraph-image.jpg",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={`${baloo.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>

        <Analytics />
        <SpeedInsights />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
