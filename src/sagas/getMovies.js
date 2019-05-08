import tmdb from "../api/tmdb";
import { put, call, takeEvery,takeLatest,delay } from "redux-saga/effects";
import {
  requestMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  requestMovieSuccess,
  requestMovieError,
  searchPerfomed,
  requestSearchError,
  
} from "../actions";

import { FETCHED_MOVIES, GET_MOVIE_ID,REQUEST_SEARCH } from "../actions/types";

export function* getMovies({ page }) {
  try {
    yield put(requestMovies());
    const movies = yield call(() =>
      tmdb
        .get("/movie/now_playing", { params: { page: page || null } })
        .then(response => response.data)
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

export function* searchMovies({ term }) {
  try {
    
    const searchResult = yield call(() =>
      tmdb.get(`search/movie`, { params: { query: term } }).then(response=>response.data)
    );
    yield delay(100)
    yield put(searchPerfomed(searchResult));
    ;
  } catch (error) {
    yield put (requestSearchError(error))
  }
}

export function* rootSaga() {
  yield [
    yield takeEvery(FETCHED_MOVIES, getMovies),
    yield takeEvery(GET_MOVIE_ID, getMovie),
    yield takeLatest(REQUEST_SEARCH,searchMovies)
  ];
}

