import { defineConfig } from "cypress"

const config = defineConfig({
  projectId: "fdr5mo",
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
})

export default config
