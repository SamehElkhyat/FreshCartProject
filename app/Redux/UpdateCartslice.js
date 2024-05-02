import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateCart = createAsyncThunk(
  "UpdateCartSlice/Carts",
  async ({ productId, count }) => {
    console.log(productId);
    console.log(count);

    const incoded = localStorage.getItem("userToken");

    const response = await axios.put(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        count: count,
      },
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

export const UpdateCartSlice = createSlice({
  name: "AllcartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(UpdateCart.fulfilled, (state, action) => {
      state.product.push(action.payload);

      state.isLoding = false;
    }),
      builder.addCase(UpdateCart.pending, (state, action) => {
        state.isLoding = action.meta;

        state.isLoding = true;
      }),
      builder.addCase(UpdateCart.rejected, (state, action) => {
        state.isError = action.error;

        state.isLoding = false;
      });
  },
});

export const UpdateCartReducer = UpdateCartSlice.reducer;
