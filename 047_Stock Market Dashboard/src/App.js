import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import StockList from './components/StockList';
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample stock symbols
  const stockSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const requests = stockSymbols.map(symbol => 
          axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`)
        );
        
        const responses = await Promise.all(requests);
        const stockData = responses.map(res => res.data['Global Quote']);
        
        setStocks(stockData.map((data, index) => ({
          symbol: stockSymbols[index],
          price: data['05. price'],
          change: data['09. change'],
          changePercent: data['10. change percent']
        })));
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {loading ? (
          <div className="loading">Loading stock data...</div>
        ) : (
          <StockList stocks={stocks} />
        )}
      </main>
    </div>
  );
}

export default App;