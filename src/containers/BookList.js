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
    <div className="container">
      <div className="books-header">
        <div className="left">
          <h1 className="book-store-title">Book Store CMS</h1>
          <span className="books">BOOKS</span>
          <CategoryFilter handleFilterChange={(e) => { filterChange(e); }} />
        </div>
        <div className="right">
          <i className="fas fa-user" />
        </div>
      </div>
      <table className="book-list-table">
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
