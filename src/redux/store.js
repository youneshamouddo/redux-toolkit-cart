import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import  cartSlice  from "./slices/cartSlice";

export  const store = configureStore({
    reducer:{
        products: productSlice,
        cart : cartSlice,
    }
})
