import { combineReducers, createStore } from 'redux';
import CartReducer from '../Reducer/CartReducer';

// const cr = combineReducers({
//   CartReducer,
// });

const Store = createStore(CartReducer);

export default Store;