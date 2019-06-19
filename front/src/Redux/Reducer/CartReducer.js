import CartService from '../../Service/CartService';

const initialState = {
  cart: CartService.getCartContent(),
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    CartService.addToCart(action.payload);
    state = [CartService.getCartContent()];
  }

  return state;
};

export default rootReducer;