import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        
        <div className="widgets__trend">
          <p>Trending in Technology</p>
          <h3>#ReactJS</h3>
          <p>15.2K Tweets</p>
        </div>
        
        <div className="widgets__trend">
          <p>Sports · Trending</p>
          <h3>#WorldCup</h3>
          <p>342K Tweets</p>
        </div>
        
        <div className="widgets__trend">
          <p>Politics · Trending</p>
          <h3>#Elections2024</h3>
          <p>125K Tweets</p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;