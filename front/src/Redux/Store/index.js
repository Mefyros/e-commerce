import { createStore } from 'redux';
import CartReducer from '../Reducer/CartReducer';

const Store = createStore(CartReducer)

export default Store;