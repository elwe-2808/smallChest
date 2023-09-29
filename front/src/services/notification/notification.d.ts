export type Severity = "success" | "warning" | "info" | "error"

export interface NotificationData {
    message: string
    uiBannerProps: UiBannerProps
    id: string
    liveTime?: number
    close: () => void
}

export interface UiBannerProps {
    severity: Severity
    bgClass: string
    iconClass: string
}
