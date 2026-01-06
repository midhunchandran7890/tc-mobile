import { configureStore } from "@reduxjs/toolkit";

import arrayReducer from "./arraySlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer,
  },
});
