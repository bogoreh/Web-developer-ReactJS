import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/Verified';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

function Tweet({ username, name, avatar, content, timestamp, likes, retweets, replies }) {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <h3>
            {name}
            <span className="tweet__username">
              @{username} · {timestamp}
            </span>
          </h3>
          <VerifiedIcon className="tweet__verified" />
        </div>
        <div className="tweet__content">
          <p>{content}</p>
        </div>
        <div className="tweet__footer">
          <div className="tweet__footerIcon">
            <ChatBubbleOutlineIcon /> <span>{replies}</span>
          </div>
          <div className="tweet__footerIcon">
            <RepeatIcon /> <span>{retweets}</span>
          </div>
          <div className="tweet__footerIcon">
            <FavoriteBorderIcon /> <span>{likes}</span>
          </div>
          <div className="tweet__footerIcon">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;