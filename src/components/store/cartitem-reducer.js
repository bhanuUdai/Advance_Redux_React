import { createSlice } from "@reduxjs/toolkit";

const initialCartItemState = { items: [], totalQuantity: 0 };

const cartItemSlice = createSlice({
  name: "cart-item",
  initialState: initialCartItemState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
          totalPrice:newItem.price
        });
        console.log(newItem,'REDUCER')
      }
      else{
        existingItem.quantity++;
        existingItem.totalPrice=existingItem.totalPrice+newItem.price
      }
    },
    removeFromCart(state,action) {
      const id=action.payload;
      const existingItem=state.items.find(item=>item.id===id);
      state.totalQuantity--;
      if(existingItem.quantity===1)
      {
        state.items=state.items.filter(item=>item.id!== id);
      }
      else{
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
      }
    },
  },
});

export const cartItemActions=cartItemSlice.actions;
export default cartItemSlice.reducer;