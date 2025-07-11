// src/components/MovieCard.js
import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster !== 'N/A' ? (
          <img 
            src={movie.Poster} 
            alt={movie.Title}
            loading="lazy"
            width="300"
            height="450"
          />
        ) : (
          <div className="poster-placeholder">No Image Available</div>
        )}
      </div>
      
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        
        <button 
          className="details-button" 
          onClick={toggleDetails}
          aria-label={showDetails ? 'Hide details' : 'Show details'}
        >
          {showDetails ? '▲ Hide Details' : '▼ Show Details'}
        </button>
        
        {showDetails && (
          <div className="movie-details">
            <p>Type: {movie.Type}</p>
            <p>IMDB ID: {movie.imdbID}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;