import React from "react";

export const AddVisitButton: React.FC = () => {
    const handleClick = () => {
        console.log("Добавить визит");
    };

    return (
        <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition"
        >
            + Добавить визит
        </button>
    );
};