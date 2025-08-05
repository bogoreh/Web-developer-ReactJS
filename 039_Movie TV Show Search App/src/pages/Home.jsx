import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'
import Search from '../components/Search'
import Spinner from '../components/Spinner'

const Home = () => {
  const { movies, loading, error } = useContext(MovieContext)

  return (
    <div className="container mx-auto px-4 py-8">
      <Search />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home