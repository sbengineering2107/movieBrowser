import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import MovieListItem from "../components/MovieListItem";

describe("MovieListItem", () => {
  const movie = {
    episode_id: 1,
    title: "The Phantom Menace",
    release_date: "1999-05-19",
  };

  test("displays movie title and date", () => {
    const { getByText } = render(
      <MovieListItem movie={movie} onSelect={() => {}} />
    );
    expect(getByText(/The Phantom Menace/i)).toBeInTheDocument();
    expect(getByText("1999-05-19")).toBeInTheDocument();
  });

  test("calls onSelect when clicked", () => {
    const onSelect = vi.fn();
    const { getByText } = render(
      <MovieListItem movie={movie} onSelect={onSelect} />
    );
    fireEvent.click(getByText(/The Phantom Menace/i));
    expect(onSelect).toHaveBeenCalled();
  });
});
