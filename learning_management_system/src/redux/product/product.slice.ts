import { createSlice } from "@reduxjs/toolkit";
import { ProductAction } from "./product.action";

interface Props{
    data:{
        productData:[],
        userDetails:any,
    },
    loading:boolean,
    error:boolean
}


const initialState:Props = {
    data : {
        productData : [],
        userDetails:null,
    },
    loading: false,
    error:false
}

const productSlice = createSlice({
    name : "productSlice",
    initialState,
    reducers:{
        
    },
    extraReducers(builder) {
        builder
        .addCase(ProductAction.getProductsData.pending,(state)=>{
            state.loading = true,
            state.error = false
        })
        .addCase(ProductAction.getProductsData.fulfilled,(state,action)=>{
          state.data.productData = action.payload,
          state.error = false,
          state.loading = false
        })
        .addCase(ProductAction.getProductsData.rejected,(state)=>{
          state.data.productData = [],
          state.error = true,
          state.loading = false
        })
        .addCase(ProductAction.signupaction.pending,(state)=>{
            state.loading = true,
            state.error = false
        })
        .addCase(ProductAction.signupaction.fulfilled,(state,action)=>{
           state.data.userDetails = action.payload,
           state.loading = false,
           state.error = false
        })
        .addCase(ProductAction.signupaction.rejected,(state)=>{
          state.data.userDetails = {},
          state.error = true,
          state.loading = false
        })
    },
})


// export const {setUserDetails} = productSlice.actions
export default productSlice.reducer


