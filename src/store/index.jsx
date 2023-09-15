import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer
    }
})