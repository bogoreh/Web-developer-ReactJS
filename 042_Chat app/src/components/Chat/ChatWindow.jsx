import React from 'react';
import { useChat } from '../../context/ChatContext';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import './ChatWindow.css';

const ChatWindow = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;