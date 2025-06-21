import React from 'react';
import Tweet from './Tweet';
import TweetForm from './TweetForm';

function Feed({ tweets, addTweet }) {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      <TweetForm addTweet={addTweet} />
      
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          username={tweet.username}
          name={tweet.name}
          avatar={tweet.avatar}
          content={tweet.content}
          timestamp={tweet.timestamp}
          likes={tweet.likes}
          retweets={tweet.retweets}
          replies={tweet.replies}
        />
      ))}
    </div>
  );
}

export default Feed;