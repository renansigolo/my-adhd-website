import * as gtag from "@/lib/gtag"
import { doc, getFirestore, onSnapshot } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebaseInit"

const languages = {
  en: require("@/locale/en.json"),
  es: require("@/locale/es.json"),
  pt: require("@/locale/pt.json")
}

export const useUserLocale = () => {
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

  return { locale, defaultLocale, messages }
}

export function useUserData() {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe

    if (user) {
      const ref = doc(getFirestore(), "users", user.uid)
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username)
      })
    } else {
      setUsername(null)
    }

    return unsubscribe
  }, [user])

  console.log(user)

  return { user, username }
}
