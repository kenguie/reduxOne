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
    case "DELETE_BOOK":
      const currentBooksToDelete = [...state.books] // make a copy of the current list
      // Determine which book to delete
      const indexToDelete = currentBooksToDelete.findIndex(
        (book) => {
          return book.id === action.payload.id;
        }
      )
      // use Slice to remove the book at the specified index
      return {books: [...currentBooksToDelete.slice(0, indexToDelete), ...currentBooksToDelete.slice(indexToDelete + 1)]};
      break;
    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books]
      const indexToUpdate = currentBookToUpdate.findIndex(
        (book) => {
          return book.id === action.payload.id;
        }
      )
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      console.log("what is in newBookToUpdate? ", newBookToUpdate);
      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
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
// Delete
store.dispatch({
  type:"DELETE_BOOK", 
  payload: { id: 1 }
});

// Update
store.dispatch({
  type:"UPDATE_BOOK",
  payload:{
    id: 2,
    title: 'transformers the movie'
  }
});