// const withNextIntl = require("next-intl/plugin")(
//   // This is the default (also the `src` folder is supported out of the box)
//   "./i18n.ts"
// )

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["myadhd.app"]
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}
