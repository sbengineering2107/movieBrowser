import React from "react";

const RatingStars = ({ rating }) => {
  const maxStars = 10;
  const filled = Math.round((rating / 10) * maxStars);
  return (
    <div className="stars">
      <span>Average Rating : </span>
      {Array.from({ length: maxStars }).map((_, i) => (
        <span key={i}>{i < filled ? "★" : "☆"}</span>
      ))}
      <span style={{ marginLeft: 8 }}>{rating}/10</span>
    </div>
  );
};

export default RatingStars;
