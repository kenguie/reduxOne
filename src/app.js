"use strict"
import {createStore} from 'redux';

// Step 3 define reducers
const reducer = (state = {books: []}, action) => {
  switch(action.type) {
    case "POST_BOOK":
      // let books = state.books.concat(action.payload);  // change to the spread operator
      // return {books};
      return {books:[...state.books, ...action.payload]}; // the spread operator creates a new array books and concats books and payload
      break;
  }
  return state;
}

// Step 1 create the store
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is: ', store.getState());
});

// Step 2 create and dispatch actions
store.dispatch({
  type:"POST_BOOK", 
  payload: [{
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
});

// Dispatch a second action
store.dispatch({
  type:"POST_BOOK", 
  payload: [{
    id: 3,
    title: "book title 3",
    description: "this is a third book",
    price: 44.99
  }]
});