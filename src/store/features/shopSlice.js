import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: JSON.parse(localStorage.getItem('items')) || [],
  },

  reducers: {
    addToCart: (state, action) => {

      toast("Wow so easy!")
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem('items', JSON.stringify(state.cart))
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        }else {
          state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }
      } 
      localStorage.setItem('items', JSON.stringify(state.cart))
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      localStorage.setItem('items', JSON.stringify(state.cart));
    }
  },
})

export const { addToCart, decrementQuantity,removeFromCart } = shopSlice.actions
export const shopCart = (state) => state.shop.cart
export default shopSlice.reducer
