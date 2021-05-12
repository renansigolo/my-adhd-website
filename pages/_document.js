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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
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
