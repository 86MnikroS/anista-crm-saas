import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { nextDay, prevDay, setSelectedDate } from "@/features/date-navigator/model/dateSlice";
import { useAppDispatch } from "@/app/providers/hooks";

export const DateNavigator = () => {
  const dispatch = useAppDispatch();
  const currentDate = useSelector((state: RootState) => state.date.selectedDate);
  const [showPicker, setShowPicker] = useState(false);

    const dateObj = new Date(
        typeof currentDate === "string" ? currentDate : String(currentDate)
    );

  const formatted = dateObj.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const isoValue = dateObj.toISOString().split("T")[0];

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
            value={isoValue}
            onChange={(e) => {
              dispatch(setSelectedDate(e.target.value));
              setShowPicker(false);
            }}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}
    </div>
  );
};