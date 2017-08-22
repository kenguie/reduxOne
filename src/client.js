"use strict"
// React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import combined reducers
import reducers from './reducers/index';

//Import Actions
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// Step 1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

// we're using redux-logger now: 
// store.subscribe(() => {
//   console.log('current state is: ', store.getState());
// });

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList} />
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
);

render(
  Routes, document.getElementById('app')
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