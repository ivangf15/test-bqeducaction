export type BillingData = {
    email: string;
    name: string;
    surname: string;
    company?: string;
    address: string;
    city: string;
    province: string;
    cp: string;
    phone?: string;
    comments?: string;
}

export type PaymentMethod = "transfer" | "bizum" | "credit-card"
