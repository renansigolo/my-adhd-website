const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const gtagEvent = ({ action, category, label, value, url }) => {
//   console.log(action, category, label, value, url)
//   // if (typeof window !== "undefined") {
//   const callback = () => {
//     console.log("test")
//     if (typeof url != "undefined") {
//       window.scrollTo(url)
//       // window.open(url, "_blank")
//     }
//   }
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//     event_callback: callback
//   })
//   // }
//     /** Record the Download Button Click Event on Google Analytics */
//     const gtagDetails = {
//       action: "Download Click",
//       category: "btn_download",
//       label: "Scroll To Download Section",
//       value: "",
//       url: "#download"
//     }
// }
