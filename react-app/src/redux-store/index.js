import { configureStore } from "@reduxjs/toolkit";
import session from "./session";
import notebook from "./notebook";
import notebooksReducer from "../features/Notebooks/notebookSlice"

const store = configureStore({
  reducer: {
    session,
    notebook,
    notebooks:notebooksReducer
  },
});

export default store;
