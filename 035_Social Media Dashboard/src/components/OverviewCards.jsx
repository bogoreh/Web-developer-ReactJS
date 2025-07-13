// components/OverviewCards.jsx
import React, { memo } from 'react';
import OverviewCard from './OverviewCard';
import '../styles/Cards.css';

const OverviewCards = memo(({ data }) => {
  return (
    <div className="overview-cards">
      {data.map(card => (
        <OverviewCard key={card.id} data={card} />
      ))}
    </div>
  );
});

export default OverviewCards;