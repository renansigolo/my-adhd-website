"use client"

import { Analytics } from "@vercel/analytics/react"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

type ProvidersProps = {
  children: ReactNode
  locale: string
  messages: any
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <>
      <IntlProvider defaultLocale={"en"} locale={locale} messages={messages}>
        {children}
        <Toaster position="top-right" reverseOrder={true} />
        <Analytics />
      </IntlProvider>
    </>
  )
}
