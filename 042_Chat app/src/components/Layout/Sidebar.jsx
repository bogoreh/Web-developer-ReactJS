import React from 'react';
import { useChat } from '../../context/ChatContext';
import './Sidebar.css';

const Sidebar = () => {
  const { onlineUsers } = useChat();

  return (
    <aside className="sidebar">
      <h3>Online Users</h3>
      <ul className="user-list">
        {onlineUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;