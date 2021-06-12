import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBook = ({
  title = '',
  category = '',
} = {}) => ({
  type: CREATE_BOOK,
  book: {
    id: Math.floor(Math.random() * 100),
    title,
    category,
  },
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
