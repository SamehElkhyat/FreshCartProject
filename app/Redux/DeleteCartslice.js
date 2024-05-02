import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DeleteCart = createAsyncThunk(
  "DeleteCartSlice/Carts",
  async (productId) => {
    const incoded = localStorage.getItem("userToken");

    const response = await axios.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        headers: { token: incoded },
      }
    );
    return response;
  }
);

const initialState = {
  product: [],

  isLoding: false,

  isError: null,
};

export const deleteCartSlice = createSlice({
  name: "AllcartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(DeleteCart.fulfilled, (state, action) => {
      state.product.push(action.payload);

      state.isLoding = false;
    }),
      builder.addCase(DeleteCart.pending, (state, action) => {
        state.isLoding = action.meta;

        state.isLoding = true;
      }),
      builder.addCase(DeleteCart.rejected, (state, action) => {
        state.isError = action.error;

        state.isLoding = false;
      });
  },
});

export const deleteCartReducer = deleteCartSlice.reducer;
