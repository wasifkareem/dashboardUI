import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: 1,
};

const btnSlice = createSlice({
  name: "btn",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = btnSlice.actions;
export default btnSlice.reducer;
