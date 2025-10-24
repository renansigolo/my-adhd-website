import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      "import/no-anonymous-default-export": "off",
      "@next/next/no-img-element": "off",
      "no-restricted-imports": [
        "warn",
        {
          name: "next/link",
          message: "Please import from `@/i18n/navigation` instead.",
        },
        {
          name: "next/navigation",
          importNames: [
            "redirect",
            "permanentRedirect",
            "useRouter",
            "usePathname",
          ],
          message: "Please import from `@/i18n/navigation` instead.",
        },
      ],
      "react/jsx-sort-props": [
        1,
        {
          reservedFirst: true,
          shorthandFirst: true,
          callbacksLast: true,
          multiline: "last",
        },
      ],
    },
  },
])

export default eslintConfig
