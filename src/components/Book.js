import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="book">
    <td className="book-info">
      {/* <td className="book-id">{book.id}</td> */}
      <span className="book-category">{book.category}</span>
      <h2 className="book-title">{book.title}</h2>
      <span className="book-author">Author</span>
      <ul className="lists">
        <li className="list-item">Comments</li>
        <li className="list-item book-category">
          <button type="button" id={book.id} onClick={handleRemoveBook}>Remove</button>
        </li>
        <li className="list-item">Edit</li>
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
