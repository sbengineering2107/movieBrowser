import axios from "axios";

export const getStarWarsMovies = async () => {
  const response = await axios.get(
    "https://swapi.py4e.com/api/films/?format=json"
  );
  return response.data.results;
};
