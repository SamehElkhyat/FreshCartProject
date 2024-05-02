import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cartSlice/addToCart", async (x) => {
  const incoded = localStorage.getItem("userToken");

  const response = await axios.post(
    `https://route-ecommerce.onrender.com/api/v1/cart`,
    {
      productId: x,
    },
    {
      headers: { token: incoded },
    }
  );
  return response.data;
});

const initialState = {
  product: [],
  isLoding: false,
  isError: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.product.push(action.payload);
      state.isLoding = false;
    }),
      builder.addCase(addToCart.pending, (state, action) => {
        state.isLoding = action.meta;

        state.isLoding = true;
      }),
      builder.addCase(addToCart.rejected, (state, action) => {
        state.isError = action.error;

        state.isLoding = false;
      });
  },
});

export const cartReducer = cartSlice.reducer;
