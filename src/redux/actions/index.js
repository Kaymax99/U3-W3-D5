export const GET_ROCK_SONGS = "GET_ROCK_SONGS";
export const GET_POP_SONGS = "GET_POP_SONGS";
export const GET_HIP_SONGS = "GET_HIP_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const GET_SONGS_LOADING_ON = "GET_SONGS_LOADING_ON";
export const GET_SONGS_LOADING_OFF = "GET_SONGS_LOADING_OFF";
export const GET_ALBUM = "GET_ALBUM";
export const GET_ARTIST = "GET_ARTIST";
export const GET_ARTIST_SONGS = "GET_ARTIST_SONGS";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_SEARCH = "GET_SEARCH";

export const getSongsAction = (baseEndpoint, headers, query, actionType) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_SONGS_LOADING_ON,
      });

      const res = await fetch(baseEndpoint + query, {
        method: "GET",
        headers,
      });
      if (res.ok) {
        const { data } = await res.json();
        // console.log(data);
        dispatch({
          type: actionType,
          payload: data[0],
        });
      } else {
        dispatch({
          type: GET_SONGS_ERROR,
          payload: "Response not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SONGS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_SONGS_LOADING_OFF,
      });
    }
  };
};

export const searchAction = (baseEndpoint, headers, query, actionType) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_SONGS_LOADING_ON,
      });

      const res = await fetch(baseEndpoint + query, {
        method: "GET",
        headers,
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: actionType,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_SONGS_ERROR,
          payload: "Response not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SONGS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_SONGS_LOADING_OFF,
      });
    }
  };
};

export const addToPlayerAction = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song,
});

export const addToFavAction = (data) => {
  return (dispatch, getState) => {
    const currentState = getState();

    if (
      currentState.favorites.songs.findIndex((song) => song === data) === -1
    ) {
      dispatch({
        type: ADD_TO_FAV,
        payload: data,
      });
    }
  };
};

export const removeFromFavAction = (id) => ({
  type: REMOVE_FROM_FAV,
  payload: id,
});
