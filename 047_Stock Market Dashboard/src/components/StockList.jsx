import React from 'react';
import StockCard from './StockCard';

const StockList = ({ stocks }) => {
  return (
    <div className="stock-list">
      {stocks.map((stock, index) => (
        <StockCard key={index} stock={stock} />
      ))}
    </div>
  );
};

export default StockList;