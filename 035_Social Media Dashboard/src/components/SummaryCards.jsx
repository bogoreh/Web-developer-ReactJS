// components/SummaryCards.jsx
import React, { memo } from 'react';
import SummaryCard from './SummaryCard';
import '../styles/Cards.css';

const SummaryCards = memo(({ data }) => {
  return (
    <div className="summary-cards">
      {data.map(card => (
        <SummaryCard key={card.id} data={card} />
      ))}
    </div>
  );
});

export default SummaryCards;