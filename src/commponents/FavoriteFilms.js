import React from 'react';
import { Link } from 'react-router-dom';
import { favoriteMoiveArr } from './HomePage';
import { Fragment } from 'react';

let favMovieArr = favoriteMoiveArr;

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default function FavoriteFilms() {
  // rewrite to state favMovies setFavoritesMovies([...favoritesMovies, newFilm])
  function addToFav(event) {
    favMovieArr.push({ name: event.target.parentElement.firstChild.innerHTML });
    console.log(favMovieArr);
    setToLocalStorage('favMovie', favMovieArr);
    event.target.classList.remove('unHidden');
    event.target.previousSibling.classList.remove('hidden');
  }

  function deleteFav(event) {
    favMovieArr = favMovieArr.filter((item) => {
      return item.name !== event.target.parentElement.firstChild.innerHTML;
    });

    console.log(favMovieArr);
    setToLocalStorage('favMovie', favMovieArr);
    event.target.classList.add('hidden');
    event.target.nextSibling.classList.add('unHidden');
  }

  return (
    <div className="favMovieMain">
      <div className="titleBlock" style={{ textAlign: 'center' }}>
        <span>Whatch List:</span>
      </div>
      <div>
        {favoriteMoiveArr.map((movie, index) =>
          //move to separate component
          {
            return (
              <Fragment key={index}>
                <ul>
                  <li>{movie.name}</li>
                  {/* look below how to change classes or text with state variables */}
                  {/* <button className={isFavorite ? 'in-favorite' : 'not-favorite'} onClick={toggleFavorite}>{isFavorite ? 'Delete Movie' : 'Add Movie'</button> */}
                  <button onClick={deleteFav}>Delete Movie</button>
                  <button onClick={addToFav} className="hidden">
                    Return To Fav
                  </button>
                </ul>
              </Fragment>
            );
          },
        )}
      </div>
      <div className="linkToHome" style={{ textAlign: 'center' }}>
        <Link to="/">Go to HomePage</Link>
      </div>
    </div>
  );
}
