// UserInsurance.js
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './FirebaseConfig';

const UserInsurance = ({ userId }) => {
  const [insuranceDetails, setInsuranceDetails] = useState(null);

  useEffect(() => {
    const insuranceRef = ref(database, 'insurance/' + userId);
    onValue(insuranceRef, (snapshot) => {
      if (snapshot.exists()) {
        setInsuranceDetails(snapshot.val());
      } else {
        setInsuranceDetails(null);
      }
    });
  }, [userId]);

  if (!insuranceDetails) {
    return <div>No insurance details available.</div>;
  }

  return (
    <div>
      <h2>Insurance Details</h2>
      <p><strong>Provider:</strong> {insuranceDetails.insuranceProvider}</p>
      <p><strong>Policy Number:</strong> {insuranceDetails.policyNumber}</p>
      <p><strong>Coverage Details:</strong> {insuranceDetails.coverageDetails}</p>
    </div>
  );
};

export default UserInsurance;
