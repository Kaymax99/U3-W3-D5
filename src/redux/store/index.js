import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "../reducers/albumReducer";
import { artistReducer } from "../reducers/artistReducer";
import { favoritesReducer } from "../reducers/favsReducer";
import { homeSongsReducer } from "../reducers/homeSongsReducer";
import { playerReducer } from "../reducers/playerReducer";

const mainReducer = combineReducers({
  songs: homeSongsReducer,
  lastViewedAlbum: albumReducer,
  lastViewedArtist: artistReducer,
  player: playerReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
