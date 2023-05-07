"use client"

// import { doc, getFirestore, onSnapshot } from "firebase/firestore"
// import { useAuthState } from "react-firebase-hooks/auth"
// import { auth } from "./firebase"

// const languages = {
//   en: require("@/translations/en.json"),
//   es: require("@/translations/es.json"),
//   pt: require("@/translations/pt.json")
// }

// export const useUserLocale = () => {
//   let defaultLocale = "en"
//   let locale = "en"
//   console.log("🚀 ~ useUserLocale ~ defaultLocale:", defaultLocale)
//   console.log("🚀 ~ useUserLocale ~ locale:", locale)
//   const messages = languages["en"]

//   // useEffect(() => {
//   //   const handleRouteChange = (/** @type {string} */ url) => {
//   //     gtag.pageview(url)
//   //   }
//   //   router.events.on("routeChangeComplete", handleRouteChange)
//   //   router.events.on("hashChangeComplete", handleRouteChange)
//   //   return () => {
//   //     router.events.off("routeChangeComplete", handleRouteChange)
//   //     router.events.off("hashChangeComplete", handleRouteChange)
//   //   }
//   // }, [router.events])

//   return { locale, defaultLocale, messages }
// }

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
