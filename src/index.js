import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './profile';
import reportWebVitals from './reportWebVitals';
import user from './user.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
