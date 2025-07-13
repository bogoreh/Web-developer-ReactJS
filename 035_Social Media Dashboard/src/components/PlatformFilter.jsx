import React from 'react';

const PlatformFilter = ({ filter, setFilter }) => {
  const platforms = [
    { id: 'all', name: 'All Platforms' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'twitter', name: 'Twitter' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'youtube', name: 'YouTube' },
  ];

  return (
    <div className="platform-filter">
      {platforms.map(platform => (
        <button
          key={platform.id}
          className={`filter-btn ${filter === platform.id ? 'active' : ''}`}
          onClick={() => setFilter(platform.id)}
        >
          {platform.name}
        </button>
      ))}
    </div>
  );
};

export default PlatformFilter;