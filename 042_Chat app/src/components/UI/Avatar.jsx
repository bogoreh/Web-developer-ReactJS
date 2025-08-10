import React from 'react';
import './Avatar.css';

const Avatar = ({ username }) => {
  const initials = username.substring(0, 2).toUpperCase();
  
  return (
    <div className="avatar">
      {initials}
    </div>
  );
};

export default Avatar;