import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="book">
    <td className="book-id">{book.id}</td>
    <td className="book-title">{book.title}</td>
    <td className="book-category">{book.category}</td>
    <td className="book-category">
      <button type="button" id={book.id} onClick={() => handleRemoveBook()}>Remove</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
