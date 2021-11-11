import { JokesTypes } from "../../Interfaces";
import { ADD_JOKE_TO_FAVORITE, DeleteItemActionType, DELETE_ITEM, addJokeToFavorite, DeleteAllType, DELETE_ALL } from "./types";


export const addToFavorite = (joke: JokesTypes): addJokeToFavorite => ({ type: ADD_JOKE_TO_FAVORITE, payload: joke })

export const deleteItemAction = (id: string): DeleteItemActionType => ({ type: DELETE_ITEM, payload: id })

export const clearFavorite = (): DeleteAllType => ({ type: DELETE_ALL })

export const favoriteJoke = (joke: any): any => (dispatch: any, getState: any) => {
    if (!getState().favoriteJokes.joke.includes(joke)) {
        dispatch(addToFavorite(joke))
    } else {
        dispatch(deleteItemAction(joke.id));
    }
}
