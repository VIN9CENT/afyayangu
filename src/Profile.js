import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import {database } from  './FirebaseConfig'

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const userRef = ref(database, `users/${user.uid}`);
      const unsubscribe = onValue(userRef, (snapshot) => {
        setUserData(snapshot.val());
      }, (error) => {
        setError(error);
      });

      return () => unsubscribe();
    }
  }, [user]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {userData.displayName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default Profile;
