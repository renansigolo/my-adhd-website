import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "es", "pt-BR"],
    defaultLocale: "en",
  },
}

export default nextConfig
