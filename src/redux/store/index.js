import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../reducers/favsReducer";
import { playerReducer } from "../reducers/playerReducer";
import { searchReducer } from "../reducers/searchReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { homeReducer } from "../reducers/homeReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_HIDDEN_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  player: playerReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
