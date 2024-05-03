import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c94d8e5ef8b4fe69956b21ebd01a6f37';

const AUTHORIZATION =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
