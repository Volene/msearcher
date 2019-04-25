import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/types";
const initState = { favoriteMovies: [] };

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {       
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload]        
      };
    case REMOVE_FROM_FAVORITE:
      return {
        favoriteMovies: state.favoriteMovies.filter(
          favmovie => favmovie.id !== action.payload
        )
      };   
    default:
      return state;
  }
};