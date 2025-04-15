export type PaymentServiceType = "A" | "B" | "C"

export type PaymentService = {
    id: string;
    title: string;
    type: PaymentServiceType;
}
