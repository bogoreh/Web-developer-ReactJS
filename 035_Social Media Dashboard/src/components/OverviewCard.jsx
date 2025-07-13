import React, { memo } from 'react';

const OverviewCard = memo(({ data }) => {
  const { metric, count, change } = data;
  const isPositive = change >= 0;

  return (
    <article className="card overview-card">
      <p className="metric">{metric}</p>
      <div className="count">{count.toLocaleString()}</div>
      <p className="change-label">Change from yesterday</p>
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

export default OverviewCard;