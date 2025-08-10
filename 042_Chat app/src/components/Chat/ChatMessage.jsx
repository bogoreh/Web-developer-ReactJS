import React from 'react';
import { useChat } from '../../context/ChatContext';
import Avatar from '../UI/Avatar';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const { currentUser } = useChat();
  const isCurrentUser = message.sender === currentUser;

  return (
    <div className={`message ${isCurrentUser ? 'current-user' : ''}`}>
      {!isCurrentUser && <Avatar username={message.sender} />}
      <div className="message-content">
        {!isCurrentUser && <div className="sender-name">{message.sender}</div>}
        <div className="message-text">{message.text}</div>
        <div className="message-time">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;