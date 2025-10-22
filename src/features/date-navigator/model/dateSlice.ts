import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
    currentDate: string; // в формате YYYY-MM-DD
}

const today = new Date().toISOString().split("T")[0];

const initialState: DateState = {
    currentDate: today,
};

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        nextDay: (state) => {
            const d = new Date(state.currentDate);
            d.setDate(d.getDate() + 1);
            state.currentDate = d.toISOString().split("T")[0];
        },
        prevDay: (state) => {
            const d = new Date(state.currentDate);
            d.setDate(d.getDate() - 1);
            state.currentDate = d.toISOString().split("T")[0];
        },
        selectDate: (state, action: PayloadAction<string>) => {
            state.currentDate = action.payload;
        },
        resetToday: (state) => {
            state.currentDate = today;
        },
    },
});

export const { nextDay, prevDay, selectDate, resetToday } = dateSlice.actions;
export default dateSlice.reducer;