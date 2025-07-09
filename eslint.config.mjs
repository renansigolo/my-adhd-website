import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "import/no-anonymous-default-export": "off",
      "@next/next/no-img-element": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: ["..*", "src"],
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
  eslintConfigPrettier,
]

export default eslintConfig
