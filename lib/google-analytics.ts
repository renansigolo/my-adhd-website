const GA_ID_WEB = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    const gtagParams: Gtag.ConfigParams = { page_path: url }
    window.gtag("config" as any, GA_ID_WEB as any, gtagParams)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GtagEventParams = {
  action: string
  category: string
  label: string
  value: number
}
export const event = ({ action, category, label, value }: GtagEventParams) => {
  const eventParams: Gtag.EventParams = {
    event_category: category,
    event_label: label,
    value: value
  }
  window.gtag("event", action, eventParams)
}
