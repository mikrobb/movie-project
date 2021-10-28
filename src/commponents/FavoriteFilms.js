import React from "react";
import { Link } from "react-router-dom";
import { favList } from "./HomePage";
import { Fragment } from "react";

export default function FavoriteFilms({
  favoriteMoiveArr,
  setFavoriteMovieArr,
  getFromLocalStorage,
  setToLocalStorage,
}) {
  // function deleteFavMovie(movie){
    
  //   favListExport = favListExport.filter((item) => {
  //     return item !== movie;
  //   });
  //   // setToLocalStorage('favMovies' , favListExport)
  // }

  function deleteFavMovie(movie){
    
    let newArray = favList.filter((item)=>{
      console.log(item, movie)
      return item !== movie
    })
    setFavoriteMovieArr(newArray)
    setToLocalStorage('favMovies',newArray)

    console.log(favList)
  }
  

  return (
    <div className="favMovieMain">
      <div className="titleBlock" style={{ textAlign: "center" }}>
        <span>Whatch List:</span>
      </div>
      <div>
        {getFromLocalStorage('favMovies').map((movie, index) => (
          <Fragment key={index}>
            <div className="favBlock">
              <i className="fa fa-bookmark" aria-hidden="true">
                <span className="titleFav">{movie}</span>
              </i>
              <button onClick={()=>deleteFavMovie(movie)}>Delete Movie</button>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="linkToHome" style={{ textAlign: "center" }}>
        <Link to="/">Go to HomePage</Link>
      </div>
    </div>
  );
}
