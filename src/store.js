import { createStore } from "redux";
import {
  ALLMOVIES,
  FINDGENRES,
  SEARCHFILM,
  SHOWFILM,
  FAVORITEFILMS,
} from "./actions";

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

const initialState = {
  favoriteMoiveArr: getFromLocalStorage("favMovies") || [],
  movie: null,
  idGenre: [],
  search: "",
  findFilm: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ALLMOVIES: {
      return { ...state, movie: action.payload };
    }
    case FINDGENRES: {
      return { ...state, idGenre: action.payload };
    }
    case SEARCHFILM: {
      return { ...state, search: action.payload };
    }
    case SHOWFILM: {
      return { ...state, findFilm: action.payload };
    }
    case FAVORITEFILMS: {
      return { ...state, favoriteMoiveArr: action.payload };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);
export default store;
