import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== itemToRemove.name);
    },
    updateQuantity: (state, action) => {
      const updatedItem = action.payload.updatedItem;
      const updatedItems = state.items.map(item => {
        if (item.name === updatedItem.name) {
          return { ...item, quantity: updatedItem.quantity };
        }
        return item;
      });
      state.items = updatedItems;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
