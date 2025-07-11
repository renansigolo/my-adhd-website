import Document, { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

export default class MyDocument extends Document {
  render() {
    const GA_ID_WEB = process.env.NEXT_PUBLIC_GA_ID
    return (
      <Html>
        <Head>
          {/* Google Analytics */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID_WEB}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID_WEB}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
