// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('action');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoized fetch function with cleanup
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Cancel previous requests
      const controller = new AbortController();
      const signal = controller.signal;
      
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=d9dcf1db`,
        { signal }
      );
      
      if (!response.ok) throw new Error('Network response failed');
      
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        throw new Error(data.Error || 'No movies found');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchMovies();
    }
    
    return () => {
      // Cleanup for useEffect
    };
  }, [fetchMovies, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Explorer</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      
      <main className="app-content">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <MovieList movies={movies} />
        )}
      </main>
    </div>
  );
}

export default App;