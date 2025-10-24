export interface Visit {
    id: string;
    clientId: string;
    clientName: string;
    date: string; // формат: "2025-10-23"
    time: string; // формат: "11:00"
    duration: number; // в минутах
    service: string;
    totalPrice: number;
    master: string;
    status: "planned" | "done" | "canceled";
    notes?: string;
    createdAt: string;
    updatedAt?: string;
}