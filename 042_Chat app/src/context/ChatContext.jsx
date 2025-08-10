import React, { createContext, useState, useContext, useEffect } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('User1');
  const [onlineUsers, setOnlineUsers] = useState([]);

  const sendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: currentUser,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      currentUser,
      setCurrentUser,
      onlineUsers
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};