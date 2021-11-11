import { JokesTypes } from "../../Interfaces";

export const ADD_JOKE = 'ADD_JOKE';

export interface JokesTypesState {
  joke: JokesTypes | null
}

export interface AddJoke {
    type: typeof ADD_JOKE 
    joke: JokesTypes 
  }

  


export type FavoriteActionTypes = AddJoke
