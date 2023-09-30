import { configureStore } from "@reduxjs/toolkit";
import cateReducer from "./Redux/CateSlice";
import productsReducer from "./Redux/productSlice";
import taskReducer1 from "./Redux/TodoSlice";
import taskReducer from "./Redux/TodoSlice1";
export const store = configureStore({
    reducer: {
        cate:cateReducer,
        product:productsReducer,
        task1:taskReducer1,
        task:taskReducer
    }
})