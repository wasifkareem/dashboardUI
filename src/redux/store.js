import { configureStore } from "@reduxjs/toolkit";
import btnReducer from "../redux/btnSlice";

export const store = configureStore({
  reducer: {
    btn: btnReducer,
  },
});
