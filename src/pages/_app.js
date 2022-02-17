// import "@/lib/firebase"
import * as gtag from "@/lib/gtag"
import "@/styles/globals.css"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

const languages = {
  en: require("@/locale/en.json"),
  es: require("@/locale/es.json"),
  pt: require("@/locale/pt.json")
}

function App({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const messages = languages[locale.substring(0, 2)]
  useEffect(() => {
    const handleRouteChange = (/** @type {string} */ url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    // <FlagsProvider
    //   defaults={{
    //     welcome_message: "Welcome"
    //   }}
    // >
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={messages}
    >
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </IntlProvider>
    // </FlagsProvider>
  )
}

export default App
