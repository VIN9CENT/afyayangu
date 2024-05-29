import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      console.log(userData, 'userData');
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <FormHeader />
      <div>
<button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default HomePage;

