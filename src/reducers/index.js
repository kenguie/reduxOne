"use strict"
import {combineReducers} from 'redux';

// Here we import reducers to be combined
import {booksReducers} from './booksReducers';

// Here we actually combine the reducers 
export default combineReducers({
  books: booksReducers
})