import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: Math.floor(Math.random() * 100), title: '', category: '' };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

    updateTitle = (title) => {
      this.setState({ id: this.id, title, category: this.category });
    }

    updateCategory = (category) => {
      this.setState({ id: this.id, title: this.title, category });
    }

    handleAddBook = () => {
      const { createBook } = this.props;
      createBook(this.state);
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
            onChange={(e) => this.updateTitle(e.target.value)}
            value={title}
          />
          <select
            name="category"
            id="category"
            onChange={(e) => this.updateCategory(e.target.value)}
            value={category}
          >
            {CATEGORIES.map((category) => <option key={`book-${category}`}>{category}</option>)}
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
