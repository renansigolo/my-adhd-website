/** @type {import('next').NextConfig} */
module.exports = {
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
