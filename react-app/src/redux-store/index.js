import { configureStore } from "@reduxjs/toolkit";
import notebookReducer from "./notebook"
import session from "./session";
import notebooksReducer from "../features/Notebooks/notebookSlice"

const store = configureStore({
  reducer: {
    session,
    notebook,
    
  },
});

export default store;
