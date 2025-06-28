import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const messagesEndRef = useRef(null);

  // Simulate receiving messages (in a real app, you'd use WebSockets)
  useEffect(() => {
    const exampleMessages = [
      { user: 'Admin', text: 'Welcome to the chat!' },
      { user: 'Admin', text: 'Set your username to begin chatting.' }
    ];
    setMessages(exampleMessages);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      user: username,
      text: message
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    setIsUsernameSet(true);
  };

  if (!isUsernameSet) {
    return (
      <div className="app">
        <div className="username-container">
          <h2>Set Your Username</h2>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <button type="submit">Start Chatting</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.user === username ? 'sent' : 'received'}`}
            >
              <span className="user">{msg.user}:</span>
              <span className="text">{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="message-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;