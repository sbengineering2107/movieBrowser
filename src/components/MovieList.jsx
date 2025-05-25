import React from "react";
import MovieListItem from "./MovieListItem";
import "../styles/movie-list.css";

const MovieList = ({ movies, onSelect }) => (
  <ul className="movie-list">
    {movies.map((movie) => (
      <MovieListItem key={movie.episode_id} movie={movie} onSelect={onSelect} />
    ))}
  </ul>
);

export default MovieList;
