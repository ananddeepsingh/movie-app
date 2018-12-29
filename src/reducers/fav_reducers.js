import { ADD_FAV } from '../actions';

export default function addToFav(state=[], action){
  switch(action.type){
    case ADD_FAV:
      return console.log("Movie Added to My Fav", action.movie);
    default:
      return state
  }
}