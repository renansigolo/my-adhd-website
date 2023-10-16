const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "fdr5mo",
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      require("dotenv").config()
      config.env.FIREBASE_URL = process.env.NEXT_PUBLIC_FIREBASE_URL
      return config
    },
  },
})
