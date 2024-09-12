import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addItem: (state, item) => {
      const existingItemIndex = state.items.findIndex(
        (data) => data.id === item.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.items[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
      } else {
        state.items = [...state.items, item];
      }
    },
    removeItem: (state, id) => {
      const existingItemIndex = state.items.findIndex((data) => data.id === id);
      const existingItem = state.items[existingItemIndex];
      if (existingItem.amount > 1) {
        state.items[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const CartStore = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
