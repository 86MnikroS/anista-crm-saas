import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Visit } from "./types";
import { mockVisits } from "./mockVisits";

interface VisitsState {
    list: Visit[];
}

const initialState: VisitsState = {
    list: mockVisits,
};

const visitsSlice = createSlice({
    name: "visits",
    initialState,
    reducers: {
        addVisit: (state, action: PayloadAction<Visit>) => {
            state.list.push(action.payload);
        },
        updateVisit: (state, action: PayloadAction<Visit>) => {
            const index = state.list.findIndex(v => v.id === action.payload.id);
            if (index !== -1) state.list[index] = action.payload;
        },
        deleteVisit: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(v => v.id !== action.payload);
        },
    },
});

export const { addVisit, updateVisit, deleteVisit } = visitsSlice.actions;
export default visitsSlice.reducer;

import { RootState } from "@/app/providers/store";

const selectVisits = (state: RootState) => state.visits.list;
const selectSelectedDate = (state: RootState) => state.date.selectedDate;

export const selectVisitsByDate = createSelector(
  [selectVisits, selectSelectedDate],
  (visits, selectedDate) => visits.filter(v => v.date === selectedDate)
);
