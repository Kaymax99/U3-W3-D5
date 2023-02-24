import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  song: null,
  isLoading: false,
  hasError: false,
  shownError: "",
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        song: action.payload,
      };

    default:
      return state;
  }
};
