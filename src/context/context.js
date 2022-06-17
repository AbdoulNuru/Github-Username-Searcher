import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockUser from './mockData.js/userMockData';
import mockRepos from './mockData.js/repoMockData';
import mockFollowers from './mockData.js/followersMockData';
import mockFollowing from './mockData.js/followingMockData';


const url = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser),
    [gitRepos, setGitRepos] = useState(mockRepos),
    [gitFollowers, setGitFollowers] = useState(mockFollowers),
    [gitFollowing, setGitFollowing] = useState(mockFollowing),
    [loading, setLoading] = useState(false),
    [requests, setRequests] = useState(0);


  return (
    <GithubContext.Provider value={{gitUser, gitRepos, gitFollowers, gitFollowing}}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
