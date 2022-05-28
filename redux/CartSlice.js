import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartLength: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.cartLength += 1;
      state.total += action.payload.orderPrice * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product.idInCart === action.payload.idInCart
        ),
        1
      );
      state.cartLength -= 1;
      state.total -= action.payload.orderPrice * action.payload.quantity;
    },
    reset: (state) => {
      (state.products = []), (state.cartLength = 0), (state.total = 0);
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addToCart, removeFromCart, reset } = actions;
// Export the reducer, either as a default or named export
export default reducer;
