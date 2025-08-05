import { Link } from 'react-router-dom'
import { getImageUrl } from '../services/movieService'

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image'
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
          <p className="text-gray-600">
            {new Date(movie.release_date).getFullYear()}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard