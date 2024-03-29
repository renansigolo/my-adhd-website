/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-img-element": 0,
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
}
