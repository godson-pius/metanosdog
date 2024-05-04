import { createSlice } from '@reduxjs/toolkit'
import { getUserCart } from '../../api'

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload)
        },
        removeCart: (state, action) => {
            // const filtered = state.carts.filter((cart) => cart._id != action.payload)
            state.carts.splice(action.payload, 1)
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer