import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  defaultCartState,
  reducers: {
    addItem: (item) => {},
    removeItem: (id) => {},
  },
});

export const CartStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
