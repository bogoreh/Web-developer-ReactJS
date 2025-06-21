import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

function TweetForm({ addTweet }) {
  const [tweetContent, setTweetContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!tweetContent.trim()) return;

    const newTweet = {
      id: Date.now(),
      username: 'currentuser',
      name: 'Current User',
      avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      content: tweetContent,
      timestamp: 'Just now',
      likes: 0,
      retweets: 0,
      replies: 0,
    };

    addTweet(newTweet);
    setTweetContent('');
  };

  return (
    <div className="tweetForm">
      <form onSubmit={handleSubmit}>
        <div className="tweetForm__input">
          <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
          />
        </div>
        <Button type="submit" className="tweetForm__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetForm;