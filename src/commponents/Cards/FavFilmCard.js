import React from 'react'
import { Fragment } from "react";

export default function FavFilmCard({index, movie, deleteFavMovie}) {
    return (
        <Fragment key={index}>
            <div className="favBlock">
              <i className="fa fa-bookmark" aria-hidden="true">
                <span className="titleFav">{movie}</span>
              </i>
              <button onClick={() => deleteFavMovie(movie)}>
                Delete Movie
              </button>
            </div>
          </Fragment>
    )
}
