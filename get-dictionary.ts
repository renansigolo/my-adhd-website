import "server-only"

import type { Locale } from "@/lib/i18n-config"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./translations/en.json").then((module) => module.default),
  es: () => import("./translations/es.json").then((module) => module.default),
  pt: () => import("./translations/pt-BR.json").then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
