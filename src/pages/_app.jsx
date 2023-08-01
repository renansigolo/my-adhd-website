import "@/styles/globals.css"

import { useUserLocale } from "@/lib/hooks"
import { Analytics } from "@vercel/analytics/react"
import { Baloo_2 } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
})

function App({ Component, pageProps }) {
  const { locale, messages, defaultLocale } = useUserLocale()

  return (
    <main className={`${baloo.variable} font-sans`}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={locale}
        messages={messages}
      >
        <Component {...pageProps} />
        <Toaster position="top-right" />
        <Analytics />
      </IntlProvider>
    </main>
  )
}

export default App
