import { createSlice } from "@reduxjs/toolkit";

export const headerTabSlice = createSlice({
  name: "headerTab",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default headerTabSlice.reducer;
