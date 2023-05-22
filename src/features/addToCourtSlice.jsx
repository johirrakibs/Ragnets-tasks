import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalItem: 0,
  totalProductPrice: 0,
};

 const addToCourtSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log('action.payload', action.payload);
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.totalItem++;
      }
      state.totalProductPrice += action.payload.price;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      item.quantity++;
      state.totalProductPrice += action.payload.price;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.totalProductPrice -= action.payload.price;
      }
    },
    delteItem: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      const removeItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeItem;
      state.totalItem--;
      state.totalProductPrice -= itemInCart.price * itemInCart.quantity;
    },
    resetInitialState: state => Object.assign(state, initialState),
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  resetInitialState,
  delteItem,
} = addToCourtSlice.actions;

export default addToCourtSlice.reducer;