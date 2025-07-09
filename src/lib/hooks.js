import * as gtag from "@/lib/google-analytics"
// import { doc, getFirestore, onSnapshot } from "firebase/firestore"
import English from "@/locale/en.json"
import Spanish from "@/locale/es.json"
import Portuguese from "@/locale/pt.json"
import { useRouter } from "next/router"
import { useEffect } from "react"
// import { useAuthState } from "react-firebase-hooks/auth"
// import { auth } from "./firebase"

const languages = {
  en: English,
  es: Spanish,
  pt: Portuguese,
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
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return { locale, defaultLocale, messages }
}

// export function useUserData() {
//   const [user] = useAuthState(auth)
//   const [username, setUsername] = useState(null)

//   useEffect(() => {
//     // turn off realtime subscription
//     let unsubscribe

//     if (user) {
//       const ref = doc(getFirestore(), "users", user.uid)
//       unsubscribe = onSnapshot(ref, (doc) => {
//         setUsername(doc.data()?.username)
//       })
//     } else {
//       setUsername(null)
//     }

//     return unsubscribe
//   }, [user])

//   return { user, username }
// }
