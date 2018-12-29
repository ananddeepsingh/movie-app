import movies from './movies_reducers';
import addToFav from './fav_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies,
  addToFav
})

export default rootReducer;