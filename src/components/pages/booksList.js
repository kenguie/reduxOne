import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Col, Row } from 'react-bootstrap';
import BookItem from './bookItem';
import BookForm from './booksForm';
import Cart from './cart';

class Booklist extends Component {
  componentDidMount() {
    // Dispatch an action
    this.props.getBooks();
  }
  render() {
    // console.log('state ', this.props.books);
    const booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem 
            _id={booksArr._id} 
            title={booksArr.title} 
            description={booksArr.description} 
            images={booksArr.images}
            price={booksArr.price} />
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>
          {booksList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);