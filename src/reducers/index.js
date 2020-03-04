import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import popupReducer from './popupReducer';

export default combineReducers({
    movies: movieReducer,
    popup: popupReducer
})