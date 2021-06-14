import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/categoryFilter';

const BookList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleClick = (book) => {
    removeBook(book);
  };

  const filterChange = ({ target: { value } }) => changeFilter(value);

  return (
    <div>
      <header>
        <h1>Book Store</h1>
        <CategoryFilter handleFilterChange={(e) => { filterChange(e); }} />
      </header>      
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
          {books.filter((book) => book.category === filter || filter === 'All').map(
            (book) => (
              <Book
                key={`book-${book.id}`}
                book={book}
                handleRemoveBook={
              () => handleClick(book)
}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
