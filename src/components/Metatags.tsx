import Head from "next/head"

export function Metatags({
  title = "My ADHD",
  description = "The first ADHD app with cognitive analysis for people with ADHD!",
  image = "https://myadhd.app/favicons/social-banner.svg",
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* MetaTags */}
      <meta title={title} />
      <meta content={`My ADHD Website - ${description}`} name="description" />
      <meta content="adhd, tdah, diagnostics, medical, brain" name="keywords" />
      <meta content="Renan Sigolo" name="author" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        name="viewport"
      />

      {/* Open Graph */}
      <meta content="website" property="og:type" />
      <meta content="https://myadhd.app/" property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />

      {/* Favicon */}
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicon.ico" rel="icon" />

      {/* Manifest  */}
      <link href="/manifest.webmanifest" rel="manifest" />

      {/* Apple */}
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        color="#111827b3"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />

      {/* Safari */}
      <meta content="app-id=1375236150" name="apple-itunes-app" />
      <meta content="#ff4b88" name="theme-color" />
      <meta content="index, follow" name="robots" />
    </Head>
  )
}
