import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { nextDay, prevDay, selectDate } from "@/features/date-navigator/model/dateSlice";

export const DateNavigator = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector((state: RootState) => state.date.currentDate);
    const [showPicker, setShowPicker] = useState(false);

    const dateObj = new Date(currentDate);
    const formatted = dateObj.toLocaleDateString("ru-RU", {
        weekday: "long",
        day: "2-digit",
        month: "long",
    });

    return (
        <div className="relative flex items-center justify-center text-lg font-medium select-none">
            <button
                onClick={() => dispatch(prevDay())}
                className="px-3 text-gray-400 hover:text-blue-500 transition"
            >
                ‹
            </button>

            <div
                onClick={() => setShowPicker((p) => !p)}
                className="px-4 py-1 cursor-pointer rounded-lg hover:bg-blue-50 transition"
            >
                <span className="text-gray-800 capitalize">{formatted}</span>
            </div>

            <button
                onClick={() => dispatch(nextDay())}
                className="px-3 text-gray-400 hover:text-blue-500 transition"
            >
                ›
            </button>

            {showPicker && (
                <div className="absolute top-10 bg-white shadow-xl rounded-xl p-3 z-50 border border-gray-100">
                    <input
                        type="date"
                        value={currentDate}
                        onChange={(e) => {
                            dispatch(selectDate(e.target.value));
                            setShowPicker(false);
                        }}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}
        </div>
    );
};