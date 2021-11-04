import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./Cards/MovieCard";
import Header from "./Cards/HeaderCard";
import { ALLMOVIES, FINDGENRES, getFilm } from "../actions";

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b54d85cb2be9820579d44930b497a17a";

export default function HomePage({ setToLocalStorage }) {
  const movie = useSelector((state) => state.movie);
  const idGenre = useSelector((state) => state.idGenre);
  const search = useSelector((state) => state.search);
  const favoriteMoiveArr = useSelector((state) => state.favoriteMoiveArr);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => dispatch({ type: ALLMOVIES, payload: json.results }));
  }, [dispatch]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b54d85cb2be9820579d44930b497a17a&language=en-US"
    )
      .then((data) => data.json())
      .then((json) => dispatch({ type: FINDGENRES, payload: json.genres }));
  }, [dispatch]);

  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <Header dispatch={dispatch} />
      <div className="movieMain">
        {movie
          .filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((info) => (
            <MovieCard
              setToLocalStorage={setToLocalStorage}
              favoriteMoiveArr={favoriteMoiveArr}
              info={info}
              idGenre={idGenre}
              favoriteMoiveArr={favoriteMoiveArr}
            />
          ))}
      </div>
    </>
  );
}
