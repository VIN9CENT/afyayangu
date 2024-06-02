// SignUp.js
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, AuthProvider, database } from './FirebaseConfig';
import FormHeader from './FormHeader';

const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = () => {
    if (isSigningUp) return;
    setIsSigningUp(true);

    signInWithPopup(auth, AuthProvider)
      .then((result) => {
        const additionalUserInfo = result.additionalUserInfo || {};
        if (additionalUserInfo.isNewUser) {
          // Redirect to registration form if the user is new
          // You may need to replace '/registration' with the actual route for the registration form
          window.location.href = '/registration';
        }
      })
      .catch((error) => {
        console.error('Sign-up error:', error);
      })
      .finally(() => {
        setIsSigningUp(false);
      });
  };

  return (
    <div>
      <p><img src={require('./images/sha_register_img.png')} alt="SHA Register" /></p>
      <p><img src={require('./images/logo.png')} style={{ width: '300px' }} alt="Logo" /></p>
      <h2>Register with the Social Health Authority</h2>
      <p>Kindly Sign Up with your Google account</p>
      <button onClick={handleSignUp} disabled={isSigningUp}>
        {isSigningUp ? 'Signing up...' : 'Google Sign Up'}
      </button>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
};

export default SignUp;
