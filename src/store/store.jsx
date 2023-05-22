import { configureStore } from '@reduxjs/toolkit';
// import addToCourtSlice from '../features/products/addToCourtSlice';
import addToCourtSlice from './../features/addToCourtSlice';




export const store = configureStore({
  reducer: {
    cart: addToCourtSlice,
  },
});
