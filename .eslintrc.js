module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  env: {
    es6: true,
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:cypress/recommended",
    "next",
    "next/core-web-vitals",
    "prettier", // Make this the last element so eslint-config-prettier config overrides other formatting rules
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
}
