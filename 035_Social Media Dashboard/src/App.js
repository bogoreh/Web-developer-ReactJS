import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    <div className="app">
      <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;