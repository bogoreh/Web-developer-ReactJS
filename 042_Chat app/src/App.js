import React from 'react';
import { ChatProvider } from './context/ChatContext';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <HomePage />
      </div>
    </ChatProvider>
  );
}

export default App;