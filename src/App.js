import { useState } from "react";
import HomePage from "./commponents/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FavoriteFilms from "./commponents/FavoriteFilms";
import MovieShow from "./commponents/MovieShow";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <HomePage setToLocalStorage={setToLocalStorage} />
        </Route>
        <Route path="/favoriteFilms">
          <FavoriteFilms setToLocalStorage={setToLocalStorage} />
        </Route>
        <Route path="/film/:id">
          <MovieShow setToLocalStorage={setToLocalStorage} />
        </Route>
      </Router>
    </>
  );
}

export default App;
