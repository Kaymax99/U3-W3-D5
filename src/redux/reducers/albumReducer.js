import { GET_ALBUM } from "../actions";

const initialState = {
  album: null,
  isLoading: false,
  hasError: false,
  shownError: "",
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload,
      };

    default:
      return state;
  }
};
