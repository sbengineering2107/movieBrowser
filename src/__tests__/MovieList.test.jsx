import { render, screen } from "@testing-library/react";
import MovieList from "../components/MovieList";

describe("MovieList", () => {
  const movies = [
    { episode_id: 1, title: "The Phantom Menace", release_date: "1999-05-19" },
  ];

  test("renders list of movies", () => {
    render(<MovieList movies={movies} onSelect={() => {}} />);
    expect(screen.getByText(/The Phantom Menace/i)).toBeInTheDocument();
  });
});
