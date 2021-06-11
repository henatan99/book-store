import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {books && books.length
        ? books.map((book) => <Book key={`book-${book.id}`} book={book} handleRemoveBook={() => removeBook(book)} />)
        : alert('No booklist to show!')}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.shape([]),
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
