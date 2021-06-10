/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '' };
    this.updateInput = this.updateInput.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

    updateInput = (title, category) => {
      this.setState({ title, category });
    }

    handleAddBook = () => {
      this.props.createBook(this.state);
      this.setState({ title: '', category: '' });
    }

    render() {
      const CATEGORIES = ['Action', 'Biography', 'History',
        'Horror', 'Kids', 'Learning', 'Sci-Fi'];
      return (
        <form>
          <input
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.title}
          />
          <select
            name="category"
            id="category"
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.category}
          >
            {CATEGORIES.map((category) => <option value={category} key={`book-${category}`}>{category}</option>)}
          </select>
          <button type="button" onClick={this.handleAddBook}>Add Book</button>
        </form>
      );
    }
}

export default connect(null, { createBook })(BookForm);
