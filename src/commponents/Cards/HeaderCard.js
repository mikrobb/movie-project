import React from "react";
import { Link } from "react-router-dom";
import { SEARCHFILM } from "../../actions";

export default function Header({ dispatch }) {
  return (
    <div className="headerBlock">
      <div>
        <Link className="favLink" to="favoriteFilms">
          Whatch List
        </Link>
      </div>
      <div>
        <h1 style={{ fontSize: "50px" }}>Popular Movies</h1>
      </div>
      <div>
        <span>Search:</span>
        <input
          onChange={(event) =>
            dispatch({ type: SEARCHFILM, payload: event.target.value })
          }
          className="searchMovie"
          type="text"
          placeholder="Search the movie"
        />
      </div>
    </div>
  );
}
