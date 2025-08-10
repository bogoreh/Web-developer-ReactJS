import React from 'react';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="app-header">
      <h1>Chat App</h1>
      <div className="user-info">
        <span>Welcome, {user}</span>
      </div>
    </header>
  );
};

export default Header;