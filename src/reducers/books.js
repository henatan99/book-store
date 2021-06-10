export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const iniatialState = {
  allIds: [],
  byIds: {},
};

export default function (state = iniatialState, action) {
  switch (action.type) {
    case CREATE_BOOK: {
      const { id, book } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            book,
            removed: false,
          },
        },
      };
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            removed: true,
          },
        },
      };
    }
    default:
      return state;
  }
}
