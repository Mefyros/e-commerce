import CartService from '../../Service/CartService';

const cart = CartService.getCartContent();

const initialState = {
  cart: cart.length > 0 && Array.isArray(cart) ? cart : [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(JSON.parse(JSON.stringify(state)), action.payload)

    default:
      break;
  }

  return state;
};

const addToCart = (state, payload) => {
  const { cart } = state;

  let productInCart = null;

  for (let i = 0; i < cart.length; ++i) {
    if (cart[i].id === payload.id) {
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
      cart: [ ...cart, CartService.newCartItem(payload) ],
    }
  }
  CartService.saveCart(state.cart);
  return state;
};