import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload)
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer