import { GET_SEARCH } from "../actions";

const initialState = {
  results: null,
  isLoading: false,
  hasError: false,
  shownError: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
