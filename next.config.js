/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["myadhd.app"],
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ["en", "es", "pt-BR"],
    defaultLocale: "en",
  },
}
