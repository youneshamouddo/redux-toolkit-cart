import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartslice",
    reducers: {
        addToCart :(state , action)=>{
            const wantedProduct = state.find((product)=> product.isbn === action.payload.isbn);
            if(wantedProduct){
                wantedProduct.quantity += 1;
            }else{
                const productClone = {...action.payload , quantity:1};
                state.push(productClone);
            }
            
        },
        deleteFromCart :(state , action)=>{
            return state.filter((product)=> product.isbn !== action.payload.isbn)
        },
        clear :(state , action)=>{
            return []
        },
        increment : (state , action)=>{
            const wantedProduct = state.find((product)=> product.isbn === action.payload.isbn);
            wantedProduct.quantity += 1;
        },
        decrement : (state , action)=>{
            const wantedProduct = state.find((product)=> product.isbn === action.payload.isbn);
            if(wantedProduct.quantity>1){
                wantedProduct.quantity -= 1;
            }
        }

    }
})

export const {decrement,addToCart,deleteFromCart,clear,increment} = cartSlice.actions;
export default cartSlice.reducer;