import { render, screen } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails";

describe("MovieDetails", () => {
  test("shows default text when no movie selected", () => {
    render(<MovieDetails movie={null} loading={false} />);
    expect(screen.getByText(/Select a movie/i)).toBeInTheDocument();
  });

  test("shows loader when loading", () => {
    render(<MovieDetails loading={true} />);
    expect(screen.getByText(/Loading movie details/i)).toBeInTheDocument();
  });

  test("renders movie details when movie is selected", () => {
    const movie = {
      title: "A New Hope",
      opening_crawl: "It is a period of civil war...",
      director: "George Lucas",
      omdb: {
        Poster: "https://fakeimage.com/poster.jpg",
        Ratings: [{ Source: "Internet Movie Database", Value: "8.6/10" }],
      },
    };
    render(<MovieDetails movie={movie} loading={false} />);
    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/)).toBeInTheDocument();
    expect(screen.getByAltText("Poster")).toBeInTheDocument();
  });
});
