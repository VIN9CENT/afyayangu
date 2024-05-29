import React, { useEffect, useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import { auth, AuthProvider, database } from './FirebaseConfig';
import Dashboard from './Dashboard';
import FormHeader from './FormHeader';

const Login = () => {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignIn = () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    signInWithPopup(auth, AuthProvider)
      .then((result) => {
        const additionalUserInfo = result.additionalUserInfo || {};  // Ensure it defaults to an empty object
        setUser(result.user);
        setIsSignedIn(true);

        if (additionalUserInfo.isNewUser) {
          setIsNewUser(true);
          const userRef = ref(database, `users/${result.user.uid}`);
          set(userRef, {
            displayName: result.user.displayName,
            email: result.user.email,
            createdAt: new Date().toISOString()
          });
        } else {
          const userRef = ref(database, `users/${result.user.uid}`);
          onValue(userRef, (snapshot) => {
            setUserData(snapshot.val());
          }, (error) => {
            console.error('Error fetching user data:', error);
          });
        }
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
        setIsSignedIn(false);
        setIsNewUser(false);
        setUserData(null);
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      setUser(userData);
      setIsSignedIn(!!userData);
      if (userData) {
        const userRef = ref(database, `users/${userData.uid}`);
        onValue(userRef, (snapshot) => {
          setUserData(snapshot.val());
        }, (error) => {
          console.error('Error fetching user data:', error);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <p><img src={require('./images/sha_register_img.png')} alt="SHA Register" /></p>
        <p><img src={require('./images/logo.png')} style={{ width: '300px' }} alt="Logo" /></p>
        <h2>Register with the Social Health Authority</h2>
        <p>Kindly Sign In/Up with your Google account</p>
        <button onClick={handleSignIn} disabled={isSigningIn}>
          {isSigningIn ? 'Signing in...' : 'Google Sign In'}
        </button>
      </div>
    );
  }

  if (isNewUser) {
    return <FormHeader user={user} />;
  }

  return <Dashboard user={user} userData={userData} handleSignOut={handleSignOut} />;
};

export default Login;
