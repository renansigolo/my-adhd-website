import Script from "next/script"
const GA_ID_WEB = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (/** @type {string} */ url) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_ID_WEB, {
      page_path: url
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

/** Global Site Tag (gtag.js) - Google Analytics */
export const GoogleAnalytics = () => {
  return (
    <>
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
          `
        }}
      />
    </>
  )
}
