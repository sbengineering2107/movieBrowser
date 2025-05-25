import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { getStarWarsMovies } from "../services/swapApi";

vi.mock("axios");

describe("getStarWarsMovies", () => {
  it("fetches and returns movies from SWAPI", async () => {
    const mockData = {
      data: {
        results: [
          { title: "A New Hope", episode_id: 4 },
          { title: "The Empire Strikes Back", episode_id: 5 },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);
    const result = await getStarWarsMovies();
    expect(result).toEqual(mockData.data.results);
    expect(axios.get).toHaveBeenCalledWith(
      "https://swapi.py4e.com/api/films/?format=json"
    );
  });
});
