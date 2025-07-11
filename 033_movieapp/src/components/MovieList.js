// src/components/MovieList.js
import React, { memo } from 'react';
import MovieCard from './MovieCard';

const MovieList = memo(({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
});

export default MovieList;