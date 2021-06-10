const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

let nextBookId = 0;

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    id: ++nextBookId,
    book
  }
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: { book }
});
