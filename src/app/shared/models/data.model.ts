export interface Register {
    id: number | string
    value: number
    description?: string
    type: string
    register_date: Date | string
}

export interface OptionalDataToast {
    duration?: number
    position?: "bottom" | "top" | "middle"
    icon?: string
}