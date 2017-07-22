"use strict"
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// Import combined reducers
import reducers from './reducers/index';

//Import Actions
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// we're using redux-logger now: 
// store.subscribe(() => {
//   console.log('current state is: ', store.getState());
// });

import BooksList from './components/pages/booksList';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);

// Step 2 create and dispatch actions
// store.dispatch(postBooks(
  
// ));

// Dispatch a second action
// Delete
// store.dispatch (deleteBooks(
//   { id: 1 }
// ));

// Update
// store.dispatch (updateBooks(
//   {
//     id: 2,
//     title: 'transformers the movie'
//   }
// ));

// ------> Cart Actions
// Add to Cart 
// store.dispatch(addToCart(
//   [{id: 1}]
// ));