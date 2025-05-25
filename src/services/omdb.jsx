import axios from "axios";
const API_KEY = "b9a5e69d";

export const getMovieDetailsFromOmdb = async (title) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?t=${encodeURIComponent(
        title
      )}&apikey=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching OMDb data:", err);
    return null;
  }
};
