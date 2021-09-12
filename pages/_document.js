import Document, { Head, Html, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "../lib/gtag"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* Google Fonts Reference https://fonts.google.com/specimen/Baloo+2?query=Balo */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;800&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <div id="fb-root"></div>

          <div id="fb-customer-chat" className="fb-customerchat"></div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
      var chatbox = document.getElementById("fb-customer-chat")
      chatbox.setAttribute("page_id", "105345684629745")
      chatbox.setAttribute("attribution", "biz_inbox")

      console.log("Init Facebook")

      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: "v11.0"
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        fjs.parentNode.insertBefore(js, fjs)
      })(document, "script", "facebook-jssdk")
    `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
