export const computeAverageRating = (omdb) => {
  if (!omdb || !omdb.Ratings) return "N/A";
  let total = 0,
    count = 0;
  omdb.Ratings.forEach((r) => {
    const value = r.Value.includes("%")
      ? parseFloat(r.Value)
      : parseFloat(r.Value) * 10;
    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });
  return count ? `${Math.round(total / count)}%` : "N/A";
};

export const extractImdbRating = (omdb) => {
  if (!omdb || !omdb.Ratings) return null;

  const imdb = omdb.Ratings.find((r) => r.Source === "Internet Movie Database");
  if (!imdb || !imdb.Value) return null;

  const value = parseFloat(imdb.Value.split("/")[0]); // "7.0/10" => 7.0
  return isNaN(value) ? null : value;
};
