import React from 'react';
import { Info, User, Search, Navbar, Repos } from '../components';

const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
    </main>
  );
};

export default Dashboard;
