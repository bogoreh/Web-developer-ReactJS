import React from 'react';
import { useChat } from '../context/ChatContext';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import ChatWindow from '../components/Chat/ChatWindow';
import '../assets/styles/main.css';

const HomePage = () => {
  const { currentUser } = useChat();

  return (
    <div className="home-container">
      <Header user={currentUser} />
      <div className="main-content">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default HomePage;