/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books && books.length
        ? books.map((book) => <Book key={`book-${book.id}`} book={book} />)
        : alert('No booklist to show!')}
    </tbody>
  </table>
);

const getBookList = (store) => (store && store.todos ? store.todos.allIds : []);

const mapStateToProps = (state) => {
  const { allBookList } = state;
  const books = getBookList(state, allBookList);
  return { books };
};

export default connect(mapStateToProps)(BookList);
