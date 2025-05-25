import React, { useEffect, useState } from "react";
import { getStarWarsMovies } from "./services/swapApi";
import { getMovieDetailsFromOmdb } from "./services/omdb";
import SortFilterBar from "./components/SortFilterBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./styles/app.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("episode_id");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStarWarsMovies().then((data) => {
      const sorted = [...data].sort((a, b) => a.episode_id - b.episode_id);
      setMovies(sorted);
      setFilteredMovies(sorted);
    });
  }, []);

  useEffect(() => {
    let temp = [...movies];
    if (search.trim()) {
      temp = temp.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortBy === "year") {
      temp.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } else {
      temp.sort((a, b) => a.episode_id - b.episode_id);
    }
    setFilteredMovies(temp);
  }, [search, sortBy, movies]);

  const onMovieSelect = async (movie) => {
    setLoading(true);
    const omdbData = await getMovieDetailsFromOmdb(movie.title);
    setSelectedMovie({ ...movie, omdb: omdbData });
    setLoading(false);
  };

  return (
    <div className="container">
      <SortFilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        search={search}
        setSearch={setSearch}
      />
      <div className="main-wrapper">
        <div className="main">
          <MovieList movies={filteredMovies} onSelect={onMovieSelect} />
          <MovieDetails movie={selectedMovie} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
