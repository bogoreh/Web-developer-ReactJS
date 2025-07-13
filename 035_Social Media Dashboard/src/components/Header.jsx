import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="dashboard-header">
      <div>
        <h1>Social Media Dashboard</h1>
        <p className="total-followers">Total Followers: 23,004</p>
      </div>
      
      <div className="toggle-container">
        <span>Dark Mode</span>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;