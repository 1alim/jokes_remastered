import { loadLS } from '../../utils/localStorageCart';
import { ADD_JOKE_TO_FAVORITE, favoriteJokesState, DELETE_ITEM, DELETE_ALL, FavoriteActionTypes } from "./types";

const initialState: favoriteJokesState = {
  joke: loadLS()
};

const favoriteJokesReducer = (state = initialState, action: FavoriteActionTypes): favoriteJokesState => {
  switch (action.type) {
    case ADD_JOKE_TO_FAVORITE: {
      return {
        ...state, joke: state.joke.length > 9
          ? [...state.joke, action.payload].slice(1)
          : [...state.joke, action.payload]
      }
    }
    case DELETE_ITEM: {
      return {
        ...state, joke: state.joke.filter(item => item.id !== action.payload)
      }
    }
    case DELETE_ALL: {
      return {
        ...state, joke: []
      }
    }
    default:
      return state;
  }
};

export default favoriteJokesReducer;