import React from "react";
import { AddVisitButton } from "@/features/add-visit/ui/AddVisitButton";
import { AddClientButton } from "@/features/add-client/ui/AddClientButton";
import { VisitCard } from "@/entities/visit/ui/VisitCard";
import { LiveClock } from "@/shared/ui/LiveClock";

export const DashboardPage: React.FC = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const visits = [
        { name: "Ольга", time: "09:30", service: "Массаж спины", phone: "050-1234567" },
        { name: "Марина", time: "11:00", service: "Антицеллюлитный", phone: "054-9876543" },
        { name: "Юлия", time: "14:00", service: "Расслабляющий массаж", phone: "052-7654321" },
    ];

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
              Сегодня, {formattedDate} — <LiveClock />
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
                <AddVisitButton />
                <AddClientButton />
            </div>

            <div className="space-y-3">
                {visits.map((v) => (
                    <VisitCard key={v.phone} {...v} />
                ))}
            </div>
        </div>
    );
};