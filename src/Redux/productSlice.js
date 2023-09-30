import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('cates/getProducts' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz")
    .then((res)=>res.json());
})
export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[],
        loading:false
    },
    extraReducers:{
        [getProducts.pending]: (state,action)=>{
            state.loading=true;
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.products= action.payload.products.data;
            console.log("sdsdsd");
        },
        [getProducts.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export default productsSlice.reducer