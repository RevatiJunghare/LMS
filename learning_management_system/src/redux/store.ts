import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productSliceReducer from "./product/product.slice"
import { configureStore } from "@reduxjs/toolkit";



const RootReducer = configureStore({
   reducer:{
    products:productSliceReducer
   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof RootReducer.dispatch;
export type RootState = ReturnType<typeof RootReducer.getState>;
export default RootReducer

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types