import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

/**
 * Add Google Analytics to Prod build
 */
function AddAnalytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? (
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-82193310-7"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "UA-82193310-7");`,
            }}
          />
        </Head>
      ) : null}
    </>
  )
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* Google Fonts Reference https://fonts.google.com/specimen/Baloo+2?query=Balo */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Baloo+2:wght@400,500,600,800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Baloo+2:wght@400,500,600,800&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Baloo+2:wght@400,500,600,800&display=swap"
            />
          </noscript>
          <AddAnalytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
