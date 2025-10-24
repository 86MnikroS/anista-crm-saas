import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
    selectedDate: string; // формат YYYY-MM-DD
}

const initialState: DateState = {
    selectedDate: new Date().toISOString().split("T")[0],
};

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        setSelectedDate: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
        },
        nextDay: (state) => {
            const current = new Date(state.selectedDate);
            current.setDate(current.getDate() + 1);
            state.selectedDate = current.toISOString().split("T")[0];
        },
        prevDay: (state) => {
            const current = new Date(state.selectedDate);
            current.setDate(current.getDate() - 1);
            state.selectedDate = current.toISOString().split("T")[0];
        },
    },
});

export const { setSelectedDate, nextDay, prevDay } = dateSlice.actions;
export default dateSlice.reducer;