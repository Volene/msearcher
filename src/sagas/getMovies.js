import tmdb from "../api/tmdb";
import { put, call, takeEvery } from "redux-saga/effects";
import {
  requestMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  requestMovieSuccess,
  requestMovieError,
  
} from "../actions";

import { FETCHED_MOVIES,GET_MOVIE_ID } from "../actions/types";

export function* getMovies() {
  try {
    yield put(requestMovies());
    const movies = yield call(() =>
      tmdb.get("/movie/now_playing").then(response => response.data)
    );
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* getMovie({ id }) {
  try {
    const movie = yield call(() =>
      tmdb.get(`/movie/${id}`).then(response => response.data)
    );
    yield put(requestMovieSuccess(movie));
  } catch (error) {
    yield put(requestMovieError(error));
  }
}

export function* rootSaga() {
  yield [
    yield takeEvery(FETCHED_MOVIES, getMovies),
    yield takeEvery(GET_MOVIE_ID, getMovie)
  ];
}

// export const fetchMovie = id => async dispatch => {
//   const response = await tmdb.get(`/movie/${id}`);

//   dispatch({
//     type: FETCH_MOVIE,
//     payload: response.data
//   });
// }; Thunki
