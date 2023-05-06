"use client"

import { useUserLocale } from "@/lib/hooks"
import { Analytics } from "@vercel/analytics/react"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const { locale, messages, defaultLocale } = useUserLocale()
  console.log("🚀 ~ Providers ~ locale:", locale)
  console.log("🚀 ~ Providers ~ messages:", messages)
  console.log("🚀 ~ Providers ~ defaultLocale:", defaultLocale)

  return (
    <>
      <IntlProvider defaultLocale={"en"} locale={"en"} messages={messages}>
        {children}
        <Toaster position="top-right" reverseOrder={true} />
        <Analytics />
      </IntlProvider>
    </>
  )
}
