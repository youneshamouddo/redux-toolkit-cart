import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk ("productSlice/fetchProducts", async () => {
    const res = await fetch("http://localhost:3009/books");
    const data = res.json();
    return data;
})
const productSlice = createSlice({
    initialState: [],
    name: 'productSlice',
    reducers: {
},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
    })
    
}
})
export const {filterProduct} = productSlice.actions;
export default productSlice.reducer;