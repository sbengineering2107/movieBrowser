import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { getMovieDetailsFromOmdb } from "../services/omdb";

vi.mock("axios");

describe("getMovieDetailsFromOmdb", () => {
  it("fetches movie details from OMDb API by title", async () => {
    const title = "A New Hope";
    const mockResponse = {
      data: {
        Title: "A New Hope",
        Ratings: [{ Source: "Internet Movie Database", Value: "8.6/10" }],
        Poster: "https://fakeurl.com/poster.jpg",
      },
    };

    axios.get.mockResolvedValue(mockResponse);
    const result = await getMovieDetailsFromOmdb(title);
    expect(result).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith(
      `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=b9a5e69d`
    );
  });
});
