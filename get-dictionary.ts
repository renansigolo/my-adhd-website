import type { Locale } from "@/lib/i18n-config"
import "server-only"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./locale/en.json").then((module) => module.default),
  es: () => import("./locale/es.json").then((module) => module.default),
  pt: () => import("./locale/pt.json").then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
