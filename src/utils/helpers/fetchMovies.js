import axios from "axios";

const BACKEND_URL = "http://18.170.108.208:8082";
// const BACKEND_URL = 'http://127.0.0.1:8082';

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/movies`);
    return data;
  } catch ({ message }) {
    console.warn(message);
  }
};

export const fetchMovie = async (id) => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/movies/${id}`);
    return data;
  } catch ({ message }) {
    console.warn(message);
  }
};

export const fetchMovieLocations = async (id) => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/moviecity/${id}`);
    console.log("movie", data);
    return data;
  } catch ({ message }) {
    console.warn(message);
  }
};
