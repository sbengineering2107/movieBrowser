import React from "react";
import "../styles/movie-list-item.css";

const MovieListItem = ({ movie, onSelect }) => (
  <li onClick={() => onSelect(movie)} className="movie-list-item">
    <strong>Episode {movie.episode_id}</strong>
    {movie.title}
    <span>{movie.release_date}</span>
  </li>
);

export default MovieListItem;
