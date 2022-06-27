import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleTheme(state, action) {
      state.flag = !state.flag;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
