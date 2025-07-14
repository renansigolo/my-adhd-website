import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es", "pt-BR"],

  // Used when no locale matches
  defaultLocale: "en",

  // Don't use a prefix for the default locale
  localePrefix: "as-needed",
})
