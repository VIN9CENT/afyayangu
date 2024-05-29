import React from 'react';
import {Profile} from '../components';
import {
  signOut,
  auth,
  user
} from "../utils/FirebaseConfig"


const Dashboard = () => {
  console.log(user)
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut(auth)}>Log Out</button>
      <Profile/>
    </div>
  );
};

export default Dashboard;
