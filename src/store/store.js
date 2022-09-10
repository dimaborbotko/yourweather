import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/generalSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
  },
});
