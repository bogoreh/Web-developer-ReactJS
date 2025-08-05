import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'
import { getImageUrl } from '../services/movieService'
import Spinner from '../components/Spinner'

const MovieDetails = () => {
  const { id } = useParams()
  const { selectedMovie, loading, error, getDetails } = useContext(MovieContext)

  useEffect(() => {
    getDetails(id)
  }, [id, getDetails])

  if (loading) return <Spinner />
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>
  if (!selectedMovie) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={getImageUrl(selectedMovie.poster_path, 'w500')}
              alt={selectedMovie.title}
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
              }}
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{selectedMovie.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{selectedMovie.vote_average.toFixed(1)}</span>
              <span className="mx-2">|</span>
              <span>{new Date(selectedMovie.release_date).getFullYear()}</span>
              <span className="mx-2">|</span>
              <span>{selectedMovie.runtime} minutes</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedMovie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700 mb-6">{selectedMovie.overview}</p>
            {selectedMovie.homepage && (
              <a
                href={selectedMovie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Official Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails