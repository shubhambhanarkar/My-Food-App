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
        (data) => data.id === item.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        state.items[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
      } else {
        state.items = [...state.items, item.payload];
      }
      state.totalPrice += item.payload.price;
    },
    removeItem: (state, item) => {
      const existingItemIndex = state.items.findIndex(
        (data) => data.id === item.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem.amount > 1) {
        state.items[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      } else {
        state.items = state.items.filter((item) => item.id !== item.payload.id);
      }
      state.totalPrice -= item.payload.price;
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
