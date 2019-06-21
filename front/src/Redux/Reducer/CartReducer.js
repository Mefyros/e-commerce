import CartService from '../../Service/CartService';

let cart = CartService.getCartContent();
cart = cart === null ? [] : cart;

const initialState = cart.length > 0 && Array.isArray(cart) ? cart : [];

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD":
      return addToCart(JSON.parse(JSON.stringify(state)), action.payload)

    default:
      return state;
  }
};

const addToCart = (state, payload) => {
  let newCart = [];
  let productInCart = null;

  for (let i = 0; i < cart.length; ++i) {
    if (cart[i].id === payload.id) {
      productInCart = i;
    };
  }

  if (productInCart !== null) {
    newCart = [ ...state ];
    newCart[productInCart].quantity++;
  } else {
    newCart = [ ...state, CartService.newCartItem(payload)];
  }

  CartService.saveCart(newCart);
  return newCart;
};