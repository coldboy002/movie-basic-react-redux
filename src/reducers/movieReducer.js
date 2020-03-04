import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/moviesActions";

const initialState = {
  movies: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
