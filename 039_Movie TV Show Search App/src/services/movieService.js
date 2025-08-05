import axios from 'axios'

const API_KEY = '3dfc9465df99b0515a51e6a0b4b1b2f5' // Get from https://www.themoviedb.org/
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  return response.data
}

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
  return response.data
}

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  return response.data
}

export const getImageUrl = (path, size = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`
}