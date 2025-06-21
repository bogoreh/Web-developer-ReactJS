import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import UserProfile from './components/UserProfile';

function App() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: 'elonmusk',
      name: 'Elon Musk',
      avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
      content: 'Humanity will reach Mars in your lifetime',
      timestamp: '2h ago',
      likes: 12453,
      retweets: 3210,
      replies: 543,
    },
    {
      id: 2,
      username: 'BillGates',
      name: 'Bill Gates',
      avatar: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
      content: 'The future of energy is clean and renewable.',
      timestamp: '5h ago',
      likes: 8765,
      retweets: 1234,
      replies: 321,
    }
  ]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Feed tweets={tweets} addTweet={addTweet} />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
        <Widgets />
      </div>
    </Router>
  );
}

export default App;