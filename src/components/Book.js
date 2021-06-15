import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="book">
    <td className="book-info">
      {/* <td className="book-id">{book.id}</td> */}
      <span className="book-category">{book.category}</span>
      <h2 className="book-title">{book.title}</h2>
      <ul className="lists">
        <li>Comments</li>
        <li className="book-category">
          <button type="button" id={book.id} onClick={handleRemoveBook}>Remove</button>
        </li>
        <li>Edit</li>
      </ul>
    </td>
    <td className="progress">
      Progress
    </td>
    <td className="chapter">
      Chapter
    </td>

  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
