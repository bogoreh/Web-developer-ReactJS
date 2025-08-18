import React from 'react';
import StockChart from './StockChart';

const StockCard = ({ stock }) => {
  const isPositive = parseFloat(stock.change) > 0;

  return (
    <div className="stock-card">
      <div className="stock-header">
        <h2>{stock.symbol}</h2>
        <span className={`price ${isPositive ? 'positive' : 'negative'}`}>
          ${parseFloat(stock.price).toFixed(2)}
        </span>
      </div>
      <div className="stock-details">
        <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
          {stock.change} ({stock.changePercent})
        </span>
      </div>
      <StockChart symbol={stock.symbol} />
    </div>
  );
};

export default StockCard;