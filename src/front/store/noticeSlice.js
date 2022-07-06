import { createSlice } from "@reduxjs/toolkit";

const noticeSlice = createSlice({
  name: "notice",
  initialState: {
    status: false,
    message: "",
  },
  reducers: {
    changeNotice(state, action) {
      console.log(action);
      state.status = true;
      state.message = action.payload;
    },
    toggleNoticeStatus(state, action) {
      state.status = false;
      state.message = "";
    },
  },
});

export const { changeNotice, toggleNoticeStatus } = noticeSlice.actions;

export default noticeSlice.reducer;
