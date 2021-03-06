import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  category,
});
