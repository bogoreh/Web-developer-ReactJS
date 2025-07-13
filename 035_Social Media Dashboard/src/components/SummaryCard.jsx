// components/SummaryCard.jsx
import React, { memo } from 'react';
import '../styles/Cards.css';

const SummaryCard = memo(({ data }) => {
  const { platform, icon, username, count, label, change } = data;
  const isPositive = change >= 0;

  return (
    <article className={`card summary-card ${platform}`}>
      <div className="card-header">
        <img src={icon} alt={platform} />
        <span>{username}</span>
      </div>
      
      <div className="card-body">
        <h3 className="count">{count.toLocaleString()}</h3>
        <p className="label">{label}</p>
      </div>
      
      <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
        <img 
          src={isPositive ? "/icons/up.svg" : "/icons/down.svg"} 
          alt={isPositive ? "Increase" : "Decrease"} 
        />
        <span>{Math.abs(change)}%</span>
      </div>
    </article>
  );
});

export default SummaryCard;