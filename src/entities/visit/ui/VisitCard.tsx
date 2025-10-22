import React from "react";

interface VisitCardProps {
    name: string;
    time: string;
    service: string;
    phone: string;
}

export const VisitCard: React.FC<VisitCardProps> = ({ name, time, service, phone }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white mb-3">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mt-1">{time}</p>
            <p className="text-gray-700 mt-2">{service}</p>
            <a
                href={`tel:${phone}`}
                className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
            >
                <span className="mr-2">📞</span> {phone}
            </a>
        </div>
    );
};