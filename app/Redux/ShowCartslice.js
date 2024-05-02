import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Carts = createAsyncThunk("cartSlice/Carts", async () => {
  const incoded = localStorage.getItem("userToken");

  const response = await axios.get(
    `https://route-ecommerce.onrender.com/api/v1/cart`,
    {
      headers: { token: incoded },
    }
  );
  return response;
});

const initialState = {
  product: [],

  isLoding: false,

  isError: null,
};

export const AllcartSlice = createSlice({
  name: "AllcartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Carts.fulfilled, (state, action) => {
      state.product.push(action.payload);

      state.isLoding = false;
    }),
      builder.addCase(Carts.pending, (state, action) => {
        state.isLoding = action.meta;

        state.isLoding = true;
      }),
      builder.addCase(Carts.rejected, (state, action) => {
        state.isError = action.error;

        state.isLoding = false;
      });
  },
});

export const AllcartReducer = AllcartSlice.reducer;
