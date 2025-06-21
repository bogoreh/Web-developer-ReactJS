import React from 'react';
import { Avatar, Button } from '@material-ui/core';

function UserProfile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover"></div>
        <div className="profile__info">
          <Avatar 
            className="profile__avatar"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          />
          <Button variant="outlined" className="profile__editButton">
            Edit profile
          </Button>
        </div>
      </div>
      
      <div className="profile__details">
        <h2>Current User</h2>
        <p>@currentuser</p>
        <p>Joined June 2023</p>
        
        <div className="profile__stats">
          <div>
            <strong>100</strong> Following
          </div>
          <div>
            <strong>50</strong> Followers
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;