import {
  GET_MOVIES_SAGA,
  GET_MOVIES_SUCCESS_SAGA,
  GET_MOVIES_ERROR_SAGA,
  REQUESTED_MOVIE_SUCCEEDED,
  REQUESTED_MOVIE_FAILED,
  GET_MOVIE_ID,
  REQUEST_SEARCH,
  SEARCH_PERFOMED,
  REQUEST_SEARCH_FAILED
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SAGA:
      return (state = {});
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

    case REQUEST_SEARCH:
      return {...state,
      term:action.payload,
      isFetching:true,
      isFetched:false,}
      
      case SEARCH_PERFOMED:
      return {
        ...state,
        ...action.payload,
        total_pages:null,
        isFetching: false,
        isFetched: true
      };
      case REQUEST_SEARCH_FAILED:
      return{
        error:action.error, isFetching:false
      }

    case GET_MOVIE_ID:
      return {
        ...state,
        id: action.payload,
        isFetching: true,
        isFetched: false
      }; 
    default:
      return state;
  }
};
