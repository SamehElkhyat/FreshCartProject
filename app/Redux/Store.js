import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { tokenReducer } from "./userToken";
import { cartReducer } from "./cartslice";
import { AllcartReducer } from "./ShowCartslice";
import { deleteCartReducer } from "./DeleteCartslice";
import { UpdateCartReducer } from "./UpdateCartslice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      token: tokenReducer,
      categories: cartReducer,
      AllCarts: AllcartReducer,
      deleteCarts: deleteCartReducer,
      UpdateCart: UpdateCartReducer,
    },
  });
};
