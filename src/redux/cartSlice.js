import { createSlice } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer';

enableMapSet();

let initialState = {
  cart: [],
  ids: new Map([])      //IMP *** for id's -- quantities
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      let id = JSON.parse(action.payload).id;
      if (state.ids.has(id)) {
        let qty = state.ids.get(id);
        state.ids.set(id, qty + 1);
      }
      else {
        state.ids.set(id, 1);
        state.cart = [
          ...state.cart,
          action.payload
        ]
      }
    },
    removeFromCart: (state, action) => {
      var id = JSON.parse(action.payload).id;
      //console.log(id);
      state.cart = state.cart.filter((obj) => {
        //console.log(JSON.parse(obj).id);
        return JSON.parse(obj).id !== id;
      });
      state.ids.delete(id);
      //console.log(state.cart);
    }
  }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions