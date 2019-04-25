import {
  GET_MOVIES_SAGA,
  GET_MOVIES_SUCCESS_SAGA,
  GET_MOVIES_ERROR_SAGA,
  SEARCH_MOVIES,
  REQUESTED_MOVIE_SUCCEEDED,
  REQUESTED_MOVIE_FAILED,
  GET_MOVIE_ID

} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SAGA:
      return state={};
    case GET_MOVIES_SUCCESS_SAGA:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        isFetched: true
      };

    case GET_MOVIES_ERROR_SAGA:
      return { error: action.error, isFetching: false };

    case REQUESTED_MOVIE_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        isFetched: true
      };

    case REQUESTED_MOVIE_FAILED:
      return { error: action.error, isFetching: false };

    case SEARCH_MOVIES:
      return {
        ...action.payload
      };
    case GET_MOVIE_ID:
      return {
        ...state, id: action.payload,isFetching: true, isFetched: false 
      }; //pseudo reselect 
    default:
      return state;
  }
};
