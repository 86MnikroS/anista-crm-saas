import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store";

export interface Visit {
    id: string;
    name: string;
    time: string;
    service: string;
    phone: string;
    date: string; // YYYY-MM-DD
}

interface VisitsState {
    items: Visit[];
}

const initialState: VisitsState = {
    items: [
        {
            id: "1",
            name: "Ольга",
            time: "09:30",
            service: "Массаж спины",
            phone: "050-1234567",
            date: "2025-10-22",
        },
        {
            id: "2",
            name: "Марина",
            time: "11:00",
            service: "Антицеллюлитный",
            phone: "054-9876543",
            date: "2025-10-22",
        },
        {
            id: "3",
            name: "Юлия",
            time: "14:00",
            service: "Расслабляющий массаж",
            phone: "052-7654321",
            date: "2025-10-23",
        },
    ],
};

const visitsSlice = createSlice({
    name: "visits",
    initialState,
    reducers: {
        addVisit: (state, action: PayloadAction<Visit>) => {
            state.items.push(action.payload);
        },
        removeVisit: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((v) => v.id !== action.payload);
        },
    },
});

export const { addVisit, removeVisit } = visitsSlice.actions;
export default visitsSlice.reducer;

// ✅ Селектор для фильтрации по текущей дате
export const selectVisitsByDate = createSelector(
    [(state: RootState) => state.visits.items, (state: RootState) => state.date.currentDate],
    (visits, currentDate) => visits.filter((v) => v.date === currentDate)
);