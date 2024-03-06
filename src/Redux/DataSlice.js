import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainTrue: false,
};

export const DataSlice = createSlice({
  name: "MainAuth",
  initialState,
  reducers: {
    change: (state) => {
      state.isMainTrue = !state.isMainTrue;
    },
  },
});

export const { change } = DataSlice.actions;
export default DataSlice.reducer;
