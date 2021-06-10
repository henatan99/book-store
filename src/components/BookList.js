/* eslint-disable react/destructuring-assignment */

import { connect } from 'react-redux';
import Book from './Book';

const BookList = (books) => (
  <div>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books && books.length
      ? books.map((book) => <Book key={`book-${book.id}`} book={book} />)
      : 'No booklist to show!'}
  </div>
);

const getBookList = (store) => (store && store.todos ? store.todos.allIds : []);

const mapStateToProps = (state) => {
  const { allBookList } = state;
  const books = getBookList(state, allBookList);
  return { books };
};

export default connect(mapStateToProps)(BookList);
