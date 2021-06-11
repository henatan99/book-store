const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_BOOK: {
      const { book } = action.book;
      return [
        ...state, { book },
      ];
    }
    case REMOVE_BOOK: {
      const { id } = action.book.id;
      return state.filter((book) => book.id !== id);
    }
    default:
      return state;
  }
}
