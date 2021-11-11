import { combineReducers } from 'redux'
import jokeReducer from './Joke/reducer'
import favoriteJokesReducer from './Favorite/reducer'



export const rootReducer = combineReducers({
  joke: jokeReducer,
  favoriteJokes: favoriteJokesReducer
})

export type RootState = ReturnType<typeof rootReducer>
