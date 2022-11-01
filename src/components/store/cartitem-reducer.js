import { createSlice } from "@reduxjs/toolkit";

const initialCartItemState = { items: [], totalQuantity: 0 };

const cartItemSlice = createSlice({
  name: "cart-item",
  initialState: initialCartItemState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          name: newItem.name,
        });
      }
      else{
        existingItem.quantity++;
        existingItem.price=existingItem.price+newItem.price
      }
    },
    removeFromCart(state) {},
  },
});
