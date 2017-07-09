"use strict"
import {combineReducers} from 'redux';

// Here we import reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// Here we actually combine the reducers 
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})