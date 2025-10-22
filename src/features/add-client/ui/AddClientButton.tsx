import React from "react";

export const AddClientButton: React.FC = () => {
    const handleClick = () => {
        console.log("Добавить клиента");
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition"
        >
            + Клиент
        </button>
    );
};