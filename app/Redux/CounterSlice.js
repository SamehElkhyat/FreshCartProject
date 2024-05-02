import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },

    decrease: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increase, decrease } = counterSlice.actions;

export let counterReducer = counterSlice.reducer;
