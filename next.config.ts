import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
