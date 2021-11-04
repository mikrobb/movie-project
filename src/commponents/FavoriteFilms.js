import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import FavFilmCard from "./Cards/FavFilmCard";
import { FAVORITEFILMS } from "../actions";

export default function FavoriteFilms({ setToLocalStorage }) {
  const favoriteMoiveArr = useSelector((state) => state.favoriteMoiveArr);
  const dispatch = useDispatch();

  function deleteFavMovie(movie) {
    const newArray = favoriteMoiveArr.filter((item) => {
      console.log(item, movie);
      return item !== movie;
    });
    dispatch({ type: FAVORITEFILMS, payload: newArray });
    setToLocalStorage("favMovies", newArray);
  }

  return (
    <div className="favMovieMain">
      <div className="titleBlock" style={{ textAlign: "center" }}>
        <span>Whatch List:</span>
      </div>
      <div>
        {favoriteMoiveArr.map((movie, index) => (
          <FavFilmCard index={index} movie={movie} deleteFavMovie={deleteFavMovie}/>
        ))}
      </div>
      <div className="linkToHome" style={{ textAlign: "center" }}>
        <Link to="/">Go to HomePage</Link>
      </div>
    </div>
  );
}
