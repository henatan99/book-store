import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

export default function (books = [], action) {
  switch (action.type) {
    case CREATE_BOOK: {
      return [
        ...books, action.book,
      ];
    }
    case REMOVE_BOOK: {
      const { id } = action.book.id;
      return books.filter((book) => book.id !== id);
    }
    default:
      return books;
  }
}
