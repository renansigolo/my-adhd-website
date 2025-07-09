/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "myadhd.app",
      },
    ],
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ["en", "es", "pt-BR"],
    defaultLocale: "en",
  },
}

export default nextConfig
