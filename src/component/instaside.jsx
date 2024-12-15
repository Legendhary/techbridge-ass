import React from "react";

import "./instaside.css"; 


const Side = () => {
  
  return (
    <div className="container">
      <div className="top">
        <div>
          <h2 className="title">Suggestions For You</h2>
        </div>
        <div>
          <a href="#picture" className="see">See All</a>
        </div>
      </div>
      {side.map((user) => (
        <div className="suggestion" key={user.id}>
          <div className="user-info">
            <div className="profile-pic"></div>
            <div className="text-info">
              <p className="name">{user.name}</p>
              <p className="following">Followed by {user.followedBy}</p>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
      ))}
    </div>
  );
};

const side = [
  { 
    id: 1, 
    name: "lucas", 
    followedBy: "mark + 2 more", 
  },

  { 
    id: 2, 
    name: "laura", 
    followedBy: "brandon + 6 more",
   }, 

  { 
    id: 3, 
    name: "rikki", 
    followedBy: "mik + 1 more" 
  },


  { 
    id: 4,
    name: "elrani", 
    followedBy: "ednamanz + 1 more" 
  },


  { 
    id: 5, 
    name: "tomaska", 
    followedBy: "katarinasterling + 2 more" 
  },

];

export default Side;
