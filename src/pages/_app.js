import "@/styles/globals.css"

import { UserContext } from "@/lib/context"
import { useUserData, useUserLocale } from "@/lib/hooks"
import { Toaster } from "react-hot-toast"
import { IntlProvider } from "react-intl"

function App({ Component, pageProps }) {
  const { locale, messages, defaultLocale } = useUserLocale()
  const userData = useUserData()
  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={messages}
    >
      <UserContext.Provider value={userData}>
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </UserContext.Provider>
    </IntlProvider>
  )
}

export default App
