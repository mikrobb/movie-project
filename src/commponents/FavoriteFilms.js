import React from "react";
import { Link } from "react-router-dom";
import { favoriteMoiveArr } from "./HomePage";
import { Fragment } from "react";

let favMovieArr = favoriteMoiveArr;

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function FavoriteFilms() {
  function addToFav(event) {
    favMovieArr.push({ name: event.target.parentElement.firstChild.innerHTML });
    console.log(favMovieArr);
    setToLocalStorage("favMovie", favMovieArr);
    event.target.classList.remove("unHidden");
    event.target.previousSibling.classList.remove("hidden");
  }

  function deleteFav(event) {
    favMovieArr = favMovieArr.filter((item) => {
      return item.name !== event.target.parentElement.firstChild.innerHTML;
    });
    console.log(favMovieArr);
    setToLocalStorage("favMovie", favMovieArr);
    event.target.classList.add("hidden");
    event.target.nextSibling.classList.add("unHidden");
  }

  return (
    <div className="favMovieMain">
      <div className="titleBlock" style={{ textAlign: "center" }}>
        <span>Whatch List:</span>
      </div>
      <div>
        {favoriteMoiveArr.map((movie, index) => (
          <Fragment key = {index}>
            <ul>
              <li>{movie.name}</li>
              <button onClick={deleteFav}>Delete Movie</button>
                <button onClick={addToFav} className="hidden">
              Return To Fav
                </button>
            </ul>
            
          </Fragment>
        ))}
      </div>
      <div className="linkToHome" style={{ textAlign: "center" }}>
        <Link to="/">Go to HomePage</Link>
      </div>
    </div>
  );
}
