import { JokesTypes } from "../../Interfaces";
export const ADD_JOKE_TO_FAVORITE = 'ADD_JOKE_TO_FAVORITE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';


export interface favoriteJokesState {
    joke: JokesTypes[] 
}
export interface DeleteItemActionType {
    type: typeof DELETE_ITEM;
    payload: string;
  };

  export interface DeleteAllType {
    type: typeof DELETE_ALL;
  };

export interface addJokeToFavorite {
    type: typeof ADD_JOKE_TO_FAVORITE;
    payload: JokesTypes;
  };


export type FavoriteActionTypes = addJokeToFavorite | DeleteItemActionType | DeleteAllType
