import { useRouter } from 'next/router'
// import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
// import Navbar from '../components/shared/Navbar'
import '../styles/globals.css'

const languages = {
  en: require('../locale/en.json'),
  es: require('../locale/es.json'),
  pt: require('../locale/pt.json'),
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const messages = languages[locale.substring(0, 2)]

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Toaster /> */}
    </IntlProvider>
  )
}

export default MyApp
