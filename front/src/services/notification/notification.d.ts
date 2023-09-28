export type Severity = "success" | "warning" | "info" | "error"

export interface NotificationData {
    message: string
    severity: Severity
    id: string
}
