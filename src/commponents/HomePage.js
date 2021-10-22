import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export let favoriteMoiveArr = getFromLocalStorage("favMovie") ?? [];

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b54d85cb2be9820579d44930b497a17a";
  
  
export default function HomePage() {
  const [movie, setMovie] = useState(null);
  const [idGenre, setId] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setMovie(json.results));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b54d85cb2be9820579d44930b497a17a&language=en-US"
    )
      .then((data) => data.json())
      .then((json) => setId(json.genres));
  }, []);

  function addToFav(event) {
    favoriteMoiveArr.push({name:event.target.parentElement.firstChild.innerHTML})
    setToLocalStorage('favMovie', favoriteMoiveArr)
    event.target.classList.add('hidden')
    event.target.nextSibling.classList.add('unHidden')
  }

  function deleteFav(event){
    favoriteMoiveArr = favoriteMoiveArr.filter((item)=>{
      return item.name !== event.target.parentElement.firstChild.innerHTML;
    })
    setToLocalStorage('favMovie', favoriteMoiveArr)
    event.target.classList.remove('unHidden')
    event.target.previousSibling.classList.remove('hidden')
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
          <h1 style={{fontSize:"50px"}}>Popular Movies</h1>
        </div>
        <div>
          <span>Search:</span>
          <input
            className="searchMovie"
            type="text"
            placeholder="Search the movie"
          />
        </div>
      </div>
      <div className="movieMain">
        {movie.map((info) => (
          <Fragment key={info.id}>
            <div className="movieBlock">
              <div className="imgBlock">
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                />
              </div>
              <div>
                <Link className="movieTitle" to={`film${info.id}`}>{info.title} </Link>
                <p>Genre: {idGenre.filter((genre=> info.genre_ids.includes(genre.id))).map((genre)=> genre.name)} </p>
                <button className='btnAdd' onClick={addToFav}>Add To Whatch List</button>
                {/* {btnAdd == true ? <button className='btnAdd' onClick = {addToFav}>Add To Whatch List</button> : null} */}
                <button className="btnDelete hidden" onClick={deleteFav}>Delete From Whatch List</button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}


