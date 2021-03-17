import { configureStore } from "@reduxjs/toolkit";
import notebookReducer from "./notebook"
import session from "./session";


const store = configureStore({
  reducer: {
    session,
    notebook:notebookReducer
    
  },
});

export default store;
