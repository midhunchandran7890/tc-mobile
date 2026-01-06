import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "arraySlice",
  initialState: {
    array: [],
  },
  reducers: {
    pushToArray: (state) => {
      state.array.push("Item");
    },
    popFromArray: (state) => {
      state.array.pop();
    },
  },
});

export const { pushToArray, popFromArray } = arraySlice.actions;

export default arraySlice.reducer;
