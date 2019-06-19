import CartService from '../../Service/CartService';

const cart = CartService.getCartContent();

const initialState = {
  cart: cart.length > 0 && Array.isArray(cart) ? cart : [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      const { cart } = state;
      const { id } = action.payload;
      let productInCart = null;

      for (let i = 0; i < cart.length; ++i) {
        if (cart[i].id === id) {
          productInCart = i;
        };
      }

      if (productInCart !== null) {
        const newCart = [...state.cart];
        newCart[productInCart].quantity++;
        state = {
          ...state,
          cart: newCart,
        }
      }
      else {
        state = {
          ...state,
          cart: [ ...cart, CartService.newCartItem(action.payload) ],
        }
      }
      CartService.saveCart(state.cart);
      break;
  
    default:
      break;
  }

  return state;
};