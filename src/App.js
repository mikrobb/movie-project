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
  const [favoriteMoiveArr, setFavoriteMovieArr] = useState(
    getFromLocalStorage("favMovies") || []
  );
  const [movie, setMovie] = useState(null);
  const [idGenre, setId] = useState([]);
  const [search, setSearch] = useState("");
  const [findFilm, setFindFilm] = useState(null);

  return (
    <>
      <Router>
        <Route exact path="/">
          <HomePage
            favoriteMoiveArr={favoriteMoiveArr}
            setFavoriteMovieArr={setFavoriteMovieArr}
            setToLocalStorage={setToLocalStorage}
            movie={movie}
            setMovie={setMovie}
            idGenre={idGenre}
            setId={setId}
            search={search}
            setSearch={setSearch}
          />
        </Route>
        <Route path="/favoriteFilms">
          <FavoriteFilms
            setToLocalStorage={setToLocalStorage}
            favoriteMoiveArr={favoriteMoiveArr}
            setFavoriteMovieArr={setFavoriteMovieArr}
          />
        </Route>
        <Route path="/film/:id">
          <MovieShow
            findFilm={findFilm}
            setFindFilm={setFindFilm}
            favoriteMoiveArr={favoriteMoiveArr}
            setFavoriteMovieArr={setFavoriteMovieArr}
            setToLocalStorage={setToLocalStorage}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
