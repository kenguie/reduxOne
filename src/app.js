"use strict"
import React from 'react';
import { render } from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// Import combined reducers
import reducers from './reducers/index';

//Import Actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import BooksList from './components/pages/booksList';

render(
  <BooksList />, document.getElementById('app')
);

// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// we're using redux-logger now: 
// store.subscribe(() => {
//   console.log('current state is: ', store.getState());
// });

// Step 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: "book title",
    description: "this is a book",
    price: 33.99
  },{
    id: 2,
    title: "book title 2",
    description: "this is a second book",
    price: 59.99
  }]
));

// Dispatch a second action
// Delete
store.dispatch (deleteBooks(
  { id: 1 }
));

// Update
store.dispatch (updateBooks(
  {
    id: 2,
    title: 'transformers the movie'
  }
));

// ------> Cart Actions
// Add to Cart 
store.dispatch(addToCart(
  [{id: 1}]
));