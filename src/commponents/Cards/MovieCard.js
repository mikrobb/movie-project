import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FAVORITEFILMS } from "../../actions";

export default function MovieCard({
  setToLocalStorage,
  info,
  idGenre,
  favoriteMoiveArr,
}) {
  const dispatch = useDispatch();
  function togle(info) {
    if (favoriteMoiveArr.includes(info.title)) {
      const newArray = favoriteMoiveArr.filter((item) => {
        return item !== info.title;
      });
      dispatch({ type: FAVORITEFILMS, payload: newArray });
      setToLocalStorage("favMovies", newArray);
    } else {
      const newArray = [...favoriteMoiveArr];
      newArray.push(info.title);
      dispatch({ type: FAVORITEFILMS, payload: newArray });
      setToLocalStorage("favMovies", newArray);
    }
  }
  return (
    <div>
      <Fragment key={info.id}>
        <div className="movieBlock">
          <div className="imgBlock">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt="Poster"
            />
          </div>
          <div>
            <Link className="movieTitle" to={`film/${info.id}`}>
              {info.title}{" "}
            </Link>
            <p>
              Genre:{" "}
              {idGenre
                .filter((genre) => info.genre_ids.includes(genre.id))
                .map((genre) => genre.name)}{" "}
            </p>
            <button className="btnAdd" onClick={() => togle(info)}>
              {favoriteMoiveArr.includes(info.title)
                ? "Delete from Watch List"
                : "Add To Watch List"}
            </button>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
