import tmdb from "../api/tmdb";
// import history from "../history";
import {
  SEARCH_MOVIES,
  GET_MOVIES_SAGA,
  GET_MOVIES_SUCCESS_SAGA,
  GET_MOVIES_ERROR_SAGA,
  FETCHED_MOVIES,
  REQUESTED_MOVIE_SUCCEEDED,
  REQUESTED_MOVIE_FAILED,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_MOVIE_ID
} from "./types";


export const addToFavorite = movie => {
  return { type: ADD_TO_FAVORITE, payload:movie};
};
export const removeFromFavorite = id => {
  return { type: REMOVE_FROM_FAVORITE,payload:id};
};

/////////////////////////////////////
export const fetchMovies = () => {
  return { type: FETCHED_MOVIES };
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
export const getMovieId=(id)=>{
  return {type:GET_MOVIE_ID, id}
}


export const requestMovieSuccess = movie => {
  return { type: REQUESTED_MOVIE_SUCCEEDED, payload: movie };
};

export const requestMovieError = () => {
  return { type: REQUESTED_MOVIE_FAILED };
};

//^SAGAS

// export const fetchMovies = () => async dispatch => {
//   const response = await tmdb.get("/movie/now_playing");

//   dispatch({
//     type: FETCH_MOVIES_SUCCESS,
//     payload: response.data
//   });
// }; thunk

export const searchMovies = term => async dispatch => {
  const response = await tmdb.get(`/search/movie/&${term}`);

  dispatch({
    type: SEARCH_MOVIES,
    payload: response.data
  });
};

// export const fetchUser=(id)=>async dispatch=>{
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER', payload:response.data})
// };
