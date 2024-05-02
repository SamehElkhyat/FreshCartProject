import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Token: 0,
};

export const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    incoded: (state) => {
      let incoded = localStorage.getItem("userToken");

      state.Token = incoded;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incoded } = tokenSlice.actions;

export let tokenReducer = tokenSlice.reducer;
