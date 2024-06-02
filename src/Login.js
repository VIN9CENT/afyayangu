import React, { useEffect, useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import { auth, AuthProvider, database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
      if (userData) {
        const userRef = ref(database, `users/${userData.uid}`);
        onValue(userRef, (snapshot) => {
          const isNewUser = !snapshot.exists();
          if (isNewUser) {
            set(userRef, {
              displayName: userData.displayName,
              email: userData.email,
              createdAt: new Date().toISOString()
            }).then(() => {
              navigate('/profile');
            }).catch((error) => {
              console.error('Error creating new user:', error);
            });
          } else {
            navigate('/profile');
          }
        }, (error) => {
          console.error('Error fetching user data:', error);
        });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    signInWithPopup(auth, AuthProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      })
      .finally(() => {
        setIsSigningIn(false);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <>
      <header>
        <img src={require('./images/logo.png')} alt="logo" style={{ width: '250px', margin: '10px' }} />
      </header>
      <section className='login'>
        <div>
          <p><img src={require('./images/sha_register_img.png')} alt="SHA Register" /></p>
        </div>
        <div>
          <h2 id='register'>Register with the Social Health Authority</h2>
          <p>Kindly Sign In/Up with your Google account</p>
          <button onClick={handleSignIn} disabled={isSigningIn} className='custom-button'>
            {isSigningIn ? 'Signing in...' : 'Google Sign In'}
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
