import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleChange = (event) => {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value });
    } else {
      this.setState({ category: event.target.value });
    }
  }

    handleAddBook = (e) => {
      e.preventDefault();
      const { createBook } = this.props;
      const book = { id: Math.floor(Math.random() * 100), ...this.state };
      createBook(book);
      this.setState({ title: '', category: '' });
    }

    render() {
      const CATEGORIES = ['Action', 'Biography', 'History',
        'Horror', 'Kids', 'Learning', 'Sci-Fi'];
      const { title, category } = this.state;
      return (
        <form onSubmit={this.handleAddBook}>
          <input
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <select
            name="category"
            id="category"
            onChange={this.handleChange}
            value={category}
          >
            {CATEGORIES.map((category) => <option key={`book-${category}`} value={category}>{category}</option>)}
          </select>
          <button type="submit">Add Book</button>
        </form>
      );
    }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BookForm);
