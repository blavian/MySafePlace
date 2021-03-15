import { configureStore } from "@reduxjs/toolkit";
import session from "./session";
import notebook from "./notebook";

const store = configureStore({
  reducer: {
    session,
    notebook,
  },
});

export default store;
