import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

const Book = (book) => {
  <tr className="book">
    <td className="book-id">{book.id}</td>
    <td className="book-title">{book.title}</td>
    <td className="book-category">{book.category}</td>
    <td className="book-category">
      <button type="button" onClick={() => { removeBook(book); }}>Remove</button>
    </td>
  </tr>;
};

export default connect(null, { removeBook })(Book);
