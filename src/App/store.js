import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/generalSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
  },
});
