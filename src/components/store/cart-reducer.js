import { createSlice } from "@reduxjs/toolkit";



const initialState = { opencart: false, notification: "" };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.opencart = !state.opencart;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
