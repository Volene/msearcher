
import {
  GET_MOVIES_SAGA,
  GET_MOVIES_SUCCESS_SAGA,
  GET_MOVIES_ERROR_SAGA,
  FETCHED_MOVIES,
  REQUESTED_MOVIE_SUCCEEDED,
  REQUESTED_MOVIE_FAILED,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_MOVIE_ID,
  REQUEST_SEARCH,
  SEARCH_PERFOMED,
  REQUEST_SEARCH_FAILED
} from "./types";

export const addToFavorite = movie => {
  return { type: ADD_TO_FAVORITE, payload: movie };
};
export const removeFromFavorite = id => {
  return { type: REMOVE_FROM_FAVORITE, payload: id };
};

/////////////////////////////////////
export const fetchMovies = page => {
  return { type: FETCHED_MOVIES, page };
};
export const requestMovies = () => {
  return { type: GET_MOVIES_SAGA };
};
export const fetchMoviesSuccess = movies => {
  return { type: GET_MOVIES_SUCCESS_SAGA, payload: movies };
};
export const fetchMoviesError = er => {
  return { type: GET_MOVIES_ERROR_SAGA, payload: er };
};
//movie
export const getMovieId = id => {
  return { type: GET_MOVIE_ID, id };
};

export const requestMovieSuccess = movie => {
  return { type: REQUESTED_MOVIE_SUCCEEDED, payload: movie };
};

export const requestMovieError = () => {
  return { type: REQUESTED_MOVIE_FAILED };
};

//SEARCH
export const requestSearch = term => {
  return { type: REQUEST_SEARCH, term };
};
export const searchPerfomed = movies => {
  return { type: SEARCH_PERFOMED, payload: movies };
};
export const requestSearchError = er => {
  return { type: REQUEST_SEARCH_FAILED, er };
};


