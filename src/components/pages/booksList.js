import React, { Component } from 'react';
import { connect } from 'react-redux';

class Booklist extends Component {
  render() {
    // console.log('state ', this.props.books);
    const booksList = this.props.books.map(function(booksArr){
      return(
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <h2>{booksArr.description}</h2>
          <h2>{booksArr.price}</h2>
        </div>
      )
    })
    return (
      <div>
        <h1>Hi there!</h1>
        {booksList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

export default connect(mapStateToProps)(Booklist);