import { Metadata } from "next"
import { Baloo_2 } from "next/font/google"
import Script from "next/script"
import { ReactNode } from "react"
import { Providers } from "./Providers"
import "./globals.css"

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo"
})

export const metadata: Metadata = {
  title: "My ADHD",
  description: "The first ADHD app with cognitive analysis!",
  authors: [{ name: "Renan Sigolo", url: "https://renansigolo.com" }]
}

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }))
// }

type Params = {
  children: ReactNode
  params: {
    lang: string
  }
}

export default function Root({ children, params }: Params) {
  const GA_ID_WEB = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang={params.lang}>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID_WEB}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID_WEB}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <body className={`${baloo.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
