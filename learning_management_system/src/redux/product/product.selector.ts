import { RootState } from "../store";




export const products = (state:RootState)=>state.products.data.productData;
export const signuperror = (state:RootState)=>state.products.error;
