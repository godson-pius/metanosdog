import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer