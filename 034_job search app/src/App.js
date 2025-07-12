// src/App.js
import React, { useState, useMemo, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import useJobSearch from './hooks/useJobSearch';
import './styles/main.css';

function App() {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    fullTime: false
  });

  const { jobs, loading, error } = useJobSearch(filters);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  return (
    <div className="job-app">
      <header className="app-header">
        <h1>DevJobs</h1>
      </header>
      
      <main className="app-container">
        <SearchBar filters={filters} onFilterChange={handleFilterChange} />
        
        {loading && <div className="loader">Loading jobs...</div>}
        {error && <div className="error">Error: {error}</div>}
        
        <JobList jobs={jobs} />
      </main>
      
      <footer className="app-footer">
        <p>© 2025 DevJobs - Created with Abdibogoreh</p>
      </footer>
    </div>
  );
}

export default App;