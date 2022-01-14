import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer';
import { productsReducer } from './productsReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
