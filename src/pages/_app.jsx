import "@/styles/globals.css"

import { useUserLocale } from "@/lib/hooks"
import { Baloo_2 } from "@next/font/google"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-baloo"
})

function App({ Component, pageProps }) {
  const { locale, messages, defaultLocale } = useUserLocale()
  // const userData = useUserData()

  return (
    <main className={`${baloo.variable} font-sans`}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={locale}
        messages={messages}
      >
        {/* <UserContext.Provider value={userData}> */}
        <Component {...pageProps} />
        <Toaster position="top-right" />
        {/* </UserContext.Provider> */}
      </IntlProvider>
    </main>
  )
}

export default App
