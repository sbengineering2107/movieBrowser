import React from "react";
import { computeAverageRating } from "../utils/ratingUtils";
import { extractImdbRating } from "../utils/ratingUtils";
import PosterImage from "./PosterImage";
import RatingStars from "./RatingStars";
import "../styles/movie-details.css";

const MovieDetails = ({ movie, loading }) => {
  if (loading)
    return <div className="movie-details loader">Loading movie details...</div>;

  if (!movie)
    return <div className="movie-details">Select a movie to view details</div>;

  const { title, opening_crawl, director, omdb } = movie;
  const averageRating = computeAverageRating(omdb);
  const fallbackPoster = "https://via.placeholder.com/200x300?text=No+Poster";
  const imdbRating = extractImdbRating(omdb);
  const maxStars = 10;
  const filledStars = imdbRating ? Math.round((imdbRating / 10) * maxStars) : 0;

  return (
    <div className="movie-details">
      <h2>{title}</h2>
      {omdb?.Poster && (
        <PosterImage
          src={
            omdb?.Poster && omdb.Poster !== "N/A" ? omdb.Poster : fallbackPoster
          }
          alt="Poster"
          className="poster"
        />
      )}
      <p>{opening_crawl}</p>
      <p>
        <strong>Directed by:</strong> {director}
      </p>
      {omdb && (
        <div className="ratings">
          {imdbRating ? (
            <RatingStars rating={imdbRating} />
          ) : (
            <p>
              <strong>Average Rating:</strong> {averageRating}
            </p>
          )}

          {omdb.Ratings?.map((r) => (
            <span key={r.Source} className="badge">
              {r.Source} : {r.Value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
