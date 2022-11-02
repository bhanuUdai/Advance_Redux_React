import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-reducer";
import questionReducer from "./question-reducer";
import cartitemReducer from "./cartitem-reducer";
const store=configureStore({reducer:{cart:cartReducer,question:questionReducer,cartitem:cartitemReducer}})
export default store;
