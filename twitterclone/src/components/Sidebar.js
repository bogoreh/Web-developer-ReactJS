import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      
      <div className="sidebar__option active">
        <HomeIcon />
        <h2>Home</h2>
      </div>
      
      <div className="sidebar__option">
        <SearchIcon />
        <h2>Explore</h2>
      </div>
      
      <div className="sidebar__option">
        <NotificationsNoneIcon />
        <h2>Notifications</h2>
      </div>
      
      <div className="sidebar__option">
        <MailOutlineIcon />
        <h2>Messages</h2>
      </div>
      
      <div className="sidebar__option">
        <BookmarkBorderIcon />
        <h2>Bookmarks</h2>
      </div>
      
      <div className="sidebar__option">
        <ListAltIcon />
        <h2>Lists</h2>
      </div>
      
      <div className="sidebar__option">
        <PermIdentityIcon />
        <h2>Profile</h2>
      </div>
      
      <div className="sidebar__option">
        <MoreHorizIcon />
        <h2>More</h2>
      </div>
      
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;