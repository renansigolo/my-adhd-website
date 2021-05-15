import { useRouter } from "next/router"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"
import "../styles/globals.css"

const languages = {
  en: require("../locale/en.json"),
  es: require("../locale/es.json"),
  pt: require("../locale/pt.json"),
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const messages = languages[locale.substring(0, 2)]
  console.log(process.env.VERCEL_ENV)

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </IntlProvider>
  )
}

export default MyApp
