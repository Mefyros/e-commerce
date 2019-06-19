import CartStore from './Store/CartStore';
import { addToCart } from './Action/CartAction';

window.CartStore = CartStore;
window.addToCart = addToCart;