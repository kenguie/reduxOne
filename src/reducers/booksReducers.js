"use strict"

// Books Reducers
export function booksReducers(state = { // initial state
  books: [{
    id: 1,
    title: "book title",
    description: "this is a book",
    price: 53.99
  },{
    id: 2,
    title: "book title 2",
    description: "this is a second book",
    price: 79.99
  }]
}, action) {
  switch(action.type) {
    case "GET_BOOKS":
      return {...state, books:[...state.books]}; 
      break;
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