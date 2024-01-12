import { createAsyncThunk } from "@reduxjs/toolkit";
import { productNetworkService } from "./product.networkservice";


export class ProductAction{
    static getProductsData = createAsyncThunk("productSlice/getProductsData",()=>{
        return productNetworkService.getProducts()
          .then((res)=>{
             return res
          })
          .catch((err)=>{
            return err
          })
          .finally(()=>{})
    })


    static signupaction = createAsyncThunk("productSlice/signupaction",(data:any,{rejectWithValue})=>{
      return productNetworkService.signupUser(data)
        .then((res:any)=>{
           return res
        })
        .catch((err)=>{
          console.log("error in signup action",err)
          rejectWithValue(err)
        })
        .finally(()=>{})
    })

    static signinaction = createAsyncThunk("productSlice/signinaction",(data,{rejectWithValue})=>{
      return productNetworkService.signinUser(data)
        .then((res)=>{
          return res
        })
        .catch((err)=>{
          console.log("error in signin action",err)
          rejectWithValue(err)
        })
        .finally(()=>{})
    })
}