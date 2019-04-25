import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favReducer from "./favReducer";
import { persist } from "../services/reduxPersist";
import { connectRouter } from 'connected-react-router'

const favoritesPersistConfig = {
  key: "persistedStore"
};

export default combineReducers({ 
  movies: movieReducer,
  persistedStore: persist(favoritesPersistConfig, favReducer)
});
