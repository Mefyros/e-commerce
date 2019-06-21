import { combineReducers, createStore } from 'redux';
import CartReducer from '../Reducer/CartReducer';
import UserReducer from '../Reducer/UserReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  ...UserReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;