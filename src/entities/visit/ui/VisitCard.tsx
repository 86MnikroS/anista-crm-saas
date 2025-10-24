import React from "react";
import { Visit } from "@/entities/visit/model/types";

export const VisitCard: React.FC<{ visit: Visit }> = ({ visit }) => {
    const { clientName, date, time, service, totalPrice, master, status, notes } = visit;
    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white mb-3 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{clientName}</h3>
                <span
                    className={`text-sm px-2 py-1 rounded ${
                        status === "done"
                            ? "bg-green-100 text-green-700"
                            : status === "canceled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                    {status === "planned" ? "Запланирован" : status === "done" ? "Завершён" : "Отменён"}
                </span>
            </div>
            <p className="text-sm text-gray-500">{date} — {time}</p>
            <p className="text-gray-700 mt-1">{service}</p>
            <p className="text-gray-600 text-sm mt-1">Мастер: {master}</p>
            <p className="text-gray-800 font-semibold mt-2">💰 {totalPrice} ₪</p>
            {notes && <p className="text-sm text-gray-500 mt-2 italic">💬 {notes}</p>}
        </div>
    );
};