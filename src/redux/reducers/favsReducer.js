import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  songs: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        songs: state.songs.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
