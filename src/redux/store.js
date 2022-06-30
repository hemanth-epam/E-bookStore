import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {                                //for all Books and cart addition and deletion of books
    book: bookReducer,
    cart: cartReducer
  },
  middleware: getDefaultMiddleware =>          //To stop serializable check, when using map in cartSlice
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store