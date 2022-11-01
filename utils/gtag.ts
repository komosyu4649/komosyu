export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";
export const existsGaId = GA_TRACKING_ID !== "";

export const pageview = (url: any) => {
    (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}

export const event = ({action, category, label, value}: {action: any, category: any, label: any, value: any}) => {
    if(!existsGaId) {
        return
    }
    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}