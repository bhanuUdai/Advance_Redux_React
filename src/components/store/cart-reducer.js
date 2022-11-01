import { createSlice } from "@reduxjs/toolkit";

const initialState={opencart:false}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        toggleCart(state)
        {
            state.opencart=!state.opencart;
        }
    }
    
})

export const cartActions=cartSlice.actions;
export default cartSlice.reducer;