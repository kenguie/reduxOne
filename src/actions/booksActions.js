"use strict"
import axios from 'axios';

// Get Books
export function getBooks(){
  return {
    type: "GET_BOOKS"
  };
}

// Post a Book
export function postBooks(book) {
  return function(dispatch) {
    axios.post("/books", book)
      .then(function(response) {
        dispatch({type: "POST_BOOK", payload: response.data})
      })
      .catch(function(err) {
        dispatch({type:"POST_BOOK_REJECTED", payload:"There was an error posting a new book."})
      })
  }
  // return {
  //   type: "POST_BOOK",
  //   payload: book
  // };
}

// Delete a Book
export function deleteBooks(id) {
  return {
    type: "DELETE_BOOK", 
    payload: id
  };
}

// Update a Book
export function updateBooks(book) {
  return {
    type:"UPDATE_BOOK",
    payload: book
  }
}
