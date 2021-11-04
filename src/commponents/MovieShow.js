import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SHOWFILM, FAVORITEFILMS } from "../actions";

export default function MovieShow({ setToLocalStorage }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const findFilm = useSelector((state) => state.findFilm);
  const favoriteMoiveArr = useSelector((state) => state.favoriteMoiveArr);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b54d85cb2be9820579d44930b497a17a`
    )
      .then((data) => data.json())
      .then((json) => dispatch({ type: SHOWFILM, payload: json }));
  }, [dispatch]);

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
      dispatch({ type:FAVORITEFILMS, payload: newArray });
      setToLocalStorage("favMovies", newArray);
    }
  }

  if (!findFilm) return <div>Loading...</div>;
  return (
    <>
      <div className="findFilmMain">
        <div className="findFimlTitleBlock">
          {findFilm.title}
          <span className="linkToHomePage">
            <Link to="/">(go to home page...)</Link>
          </span>
        </div>
        <hr />
        <div className="findFimlInfoMain">
          <div className="findFilmPosterImg">
            {" "}
            <img
              className="findFilmPoster"
              src={`https://image.tmdb.org/t/p/w500${findFilm.poster_path}`}
              alt="Poster"
            />
          </div>
          <div className="findFilmInfoBlock">
            <div className="findFilmInfoAboutFilm">
              <p className="findFilmInfoAboutFilm_Title">Status:</p>
              <p className="findFilmInfoAboutFilm_Text">{findFilm.status}</p>
              <hr />
            </div>
            <div className="findFilmInfoAboutFilm">
              <p className="findFilmInfoAboutFilm_Title">Release date:</p>
              <p className="findFilmInfoAboutFilm_Text">
                {findFilm.release_date}
              </p>
              <hr />
            </div>
            <div className="findFilmInfoAboutFilm">
              <p className="findFilmInfoAboutFilm_Title">Overview:</p>
              <p className="findFilmInfoAboutFilm_Text">{findFilm.overview}</p>
              <hr />
            </div>
            <div className="findFilmInfoAboutFilm">
              <p className="findFilmInfoAboutFilm_Title">Genres:</p>
              <p className="findFilmInfoAboutFilm_Text">
                {findFilm.genres.map((genres) => genres.name)}
              </p>
              <hr />
            </div>
            <div className="findFilmInfoAboutFilm">
              <button className="btnAdd" onClick={() => togle(findFilm)}>
                {favoriteMoiveArr.includes(findFilm.title)
                  ? "Delete from Watch List"
                  : "Add To Watch List"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
