import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockUser from './mockData.js/userMockData';
import mockRepos from './mockData.js/repoMockData';
import mockFollowers from './mockData.js/followersMockData';
import mockFollowing from './mockData.js/followingMockData';
import followers from './mockData.js/followersMockData';


const url = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser),
    [gitRepos, setGitRepos] = useState(mockRepos),
    [gitFollowers, setGitFollowers] = useState(mockFollowers),
    [gitFollowing, setGitFollowing] = useState(mockFollowing),
    [loading, setLoading] = useState(false),
    [requests, setRequests] = useState(0);

    const searchUser = async (user) => {
      const response = await axios
        .get(`${url}/users/${user}`)
        .catch((err) => console.log(err));
  
      console.log(response);
      if (response) {
        setGitUser(response.data);
        console.log(response);
        const { followers_url, login } = response.data;
  
        await Promise.allSettled([
          axios.get(`${url}/users/${login}/repos`),
          axios.get(`${url}/${followers_url}?per_page=100`),
        ])
          .then((results) => {
            const [repos, followers] = results;
            const fulfilledStatus = 'fulfilled';
  
            if (repos.status === fulfilledStatus) {
              setGitRepos(repos.value.data);
            }
            if (followers.status === fulfilledStatus) {
              setGitFollowers(followers.value.data);
            }
          })
          .catch((err) => console.log(err));
      } 
    };

  return (
    <GithubContext.Provider value={{gitUser, gitRepos, gitFollowers, gitFollowing, searchUser}}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
