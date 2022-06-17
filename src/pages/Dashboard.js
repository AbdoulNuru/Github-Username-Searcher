import React from 'react';
import { Info, User, Search, Navbar} from '../components';

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
