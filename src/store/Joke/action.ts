import {  AppThunk } from './../index';
import { ADD_JOKE } from "./types";
import { JokesTypes } from "../../Interfaces";

export const addToState = (joke: JokesTypes) => ({ type: ADD_JOKE, joke })

export const requestJoke = (dispatch: any) => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        dispatch(addToState(data))
      })
      .catch(err => {
        console.log("fetchErr", err)
      })
}

export const addJoke = (): AppThunk => (dispatch) => {
  requestJoke(dispatch)
}