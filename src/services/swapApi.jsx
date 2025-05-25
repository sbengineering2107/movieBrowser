import axios from "axios";

export const getStarWarsMovies = async () => {
  try {
    const response = await axios.get(
      "https://swapi.py4e.com/api/films/?format=json"
    );
    return response.data.results;
  } catch (err) {
    console.error("Error fetching SWAPI data:", err);
    return [];
  }
};
