import { ADD_JOKE, JokesTypesState, FavoriteActionTypes } from "./types";

const initialState: JokesTypesState = {
  joke: null
};

const jokeReducer = (state = initialState, action: FavoriteActionTypes): JokesTypesState => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, joke: action.joke };
    default:
      return state;
  }
};

export default jokeReducer;