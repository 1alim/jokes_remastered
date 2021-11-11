import { JokesTypes } from "../Interfaces";

export const loadLS = (): JokesTypes[] | [] => {
  try {
    const initialState = localStorage.getItem('cartItems');
    if (initialState === null) {
      return [];
    }
    return JSON.parse(initialState);
  } catch (err) {
    return [];
  }
};

export const setLS = (items: JokesTypes[]): void => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

export const removeLs = (): void => {
  localStorage.removeItem('cartItems');
};