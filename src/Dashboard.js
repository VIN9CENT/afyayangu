// Dashboard.js
import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Profile from './Profile'


const Dashboard = () => {
  const [user, setUser] = useState(null);;

  const auth = getAuth();

 

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      `<p>Welcome</p>`
      <Profile user={user}/>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
