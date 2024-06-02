import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Sha from './Sha';
import Terms from './Terms';
import Login from './Login';
import Profile from './Profile';
import { auth } from './FirebaseConfig';
import { signOut } from 'firebase/auth';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sha" element={<Sha />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />} />
        <Route path="/profile" element={<Profile handleSignOut={handleSignOut} />} />
      </Routes>
    </Router>
  );
}

export default App;
