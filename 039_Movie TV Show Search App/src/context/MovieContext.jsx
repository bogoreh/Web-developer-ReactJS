import { createContext, useState, useEffect } from 'react'
import { getPopularMovies, searchMovies, getMovieDetails } from '../services/movieService'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true)
        const data = await getPopularMovies()
        setMovies(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (!query) {
      fetchPopularMovies()
    }
  }, [query])

  const search = async (searchQuery) => {
    try {
      setLoading(true)
      setQuery(searchQuery)
      const data = await searchMovies(searchQuery)
      setMovies(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getDetails = async (id) => {
    try {
      setLoading(true)
      const data = await getMovieDetails(id)
      setSelectedMovie(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        query,
        selectedMovie,
        search,
        getDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}