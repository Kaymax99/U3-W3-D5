import { GET_HIP_SONGS, GET_POP_SONGS, GET_ROCK_SONGS } from "../actions";

const initialState = {
  rockResults: [],
  popResults: [],
  hipHopResults: [],
  isLoading: false,
  hasError: false,
  shownError: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_SONGS:
      return {
        ...state,
        rockResults: [...state.rockResults, action.payload],
      };
    case GET_POP_SONGS:
      return {
        ...state,
        popResults: [...state.popResults, action.payload],
      };
    case GET_HIP_SONGS:
      return {
        ...state,
        hipHopResults: [...state.hipHopResults, action.payload],
      };

    default:
      return state;
  }
};
