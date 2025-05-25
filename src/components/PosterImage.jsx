import React from "react";
const fallbackPoster = "https://via.placeholder.com/200x300?text=No+Poster";

const PosterImage = ({ src, alt }) => (
  <img
    src={src && src !== "N/A" ? src : fallbackPoster}
    alt={alt || "Poster"}
    className="poster"
  />
);

export default PosterImage;
