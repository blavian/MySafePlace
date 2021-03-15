import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const notebooksSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default notebooksSlice.reducer;