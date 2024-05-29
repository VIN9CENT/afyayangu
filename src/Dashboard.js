import React from 'react';
import Profile from './Profile';

const Dashboard = ({ user, handleSignOut }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Log Out</button>
      <Profile user={user} />
    </div>
  );
};

export default Dashboard;
