import { GET_ARTIST, GET_ARTIST_SONGS } from "../actions";

const initialState = {
  artist: null,
  trackList: null,
  isLoading: false,
  hasError: false,
  shownError: "",
};

export const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case GET_ARTIST_SONGS:
      return {
        ...state,
        trackList: action.payload,
      };

    default:
      return state;
  }
};
