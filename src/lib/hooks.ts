import * as gtag from "@/lib/google-analytics"
import English from "@/locale/en.json"
import Spanish from "@/locale/es.json"
import Portuguese from "@/locale/pt.json"
import { useRouter } from "next/router"
import { useEffect } from "react"

const languages = {
  en: English,
  es: Spanish,
  pt: Portuguese,
}

export const useUserLocale = () => {
  const router = useRouter()
  const { locale, defaultLocale } = router
  const shortLocale = (locale?.substring(0, 2) ||
    "en") as keyof typeof languages
  const messages = languages[shortLocale]

  useEffect(() => {
    const handleRouteChange = (url: string) => {
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
