import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b54d85cb2be9820579d44930b497a17a';

export default function HomePage({
  favoriteMoiveArr,
  setFavoriteMovieArr,
  setToLocalStorage,
  movie,
  setMovie,
  idGenre,
  setId,
  search,
  setSearch,
}) {

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setMovie(json.results));
  }, [setMovie]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=b54d85cb2be9820579d44930b497a17a&language=en-US',
    )
      .then((data) => data.json())
      .then((json) => setId(json.genres));
  }, [setId]);

  function togle(info) {
    if (favoriteMoiveArr.includes(info.title)) {
      const newArray = favoriteMoiveArr.filter((item) => {
        return item !== info.title;
      });
      setFavoriteMovieArr(newArray);
      setToLocalStorage('favMovies', newArray);
    } else {
      const newArray = [...favoriteMoiveArr];
      newArray.push(info.title);
      setFavoriteMovieArr(newArray);
      setToLocalStorage('favMovies', newArray);
    }
  }
  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <div className="headerBlock">
        <div>
          <Link className="favLink" to="favoriteFilms">
            Whatch List
          </Link>
        </div>
        <div>
          <h1 style={{ fontSize: '50px' }}>Popular Movies</h1>
        </div>
        <div>
          <span>Search:</span>
          <input
            onChange={(event) => setSearch(event.target.value)}
            className="searchMovie"
            type="text"
            placeholder="Search the movie"
          />
        </div>
      </div>
      <div className="movieMain">
        {movie
          .filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((info) => (
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
                    {info.title}{' '}
                  </Link>
                  <p>
                    Genre:{' '}
                    {idGenre
                      .filter((genre) => info.genre_ids.includes(genre.id))
                      .map((genre) => genre.name)}{' '}
                  </p>
                  <button className="btnAdd" onClick={() => togle(info)}>
                    {favoriteMoiveArr.includes(info.title)
                      ? 'Delete from Watch List'
                      : 'Add To Watch List'}
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    </>
  );
}
