const GA_ID_WEB = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", String(GA_ID_WEB), {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type EventProps = {
  action: string
  category: string
  label?: string
  value?: number
}
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
