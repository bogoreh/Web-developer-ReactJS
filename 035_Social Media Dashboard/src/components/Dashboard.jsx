import React, { useState, useMemo } from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import OverviewCards from './OverviewCards';
import PlatformFilter from './PlatformFilter';
import { summaryData, overviewData } from '../data/mockData';
import '../styles/Dashboard.css';

const Dashboard = ({ darkMode, setDarkMode }) => {
  const [filter, setFilter] = useState('all');
  
  const filteredOverview = useMemo(() => {
    return filter === 'all' 
      ? overviewData 
      : overviewData.filter(item => item.platform === filter);
  }, [filter]);

  return (
    <div className="dashboard">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main className="dashboard-content">
        <PlatformFilter filter={filter} setFilter={setFilter} />
        
        <SummaryCards data={summaryData} />
        
        <h2 className="overview-title">Overview - Today</h2>
        <OverviewCards data={filteredOverview} />
      </main>
    </div>
  );
};

export default Dashboard;