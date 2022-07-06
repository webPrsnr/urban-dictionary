import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import noticeReducer from "./noticeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    notice: noticeReducer,
  },
});
