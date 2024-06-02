import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { auth, database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(database, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        setUserData(snapshot.val());
      }, (error) => {
        console.error('Error fetching user data:', error);
      });
    } else {
      navigate('/login'); // Redirect to login if user is not signed in
    }
  }, [navigate]);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-component">
      <h1>Profile</h1>
      <p><strong>Name:</strong> {userData.displayName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
