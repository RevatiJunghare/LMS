import { RootState } from "../store";




export const products = (state:RootState)=>state.products.data.productData;
export const userdetails = (state:RootState)=>state.products.data.userDetails;