
import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './FirebaseConfig';

const InsuranceForm = () => {
  const [userId, setUserId] = useState('');
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [coverageDetails, setCoverageDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    set(ref(database, 'insurance/' + userId), {
      insuranceProvider,
      policyNumber,
      coverageDetails,
    });
    setUserId('');
    setInsuranceProvider('');
    setPolicyNumber('');
    setCoverageDetails('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User ID:</label>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <label>Insurance Provider:</label>
      <input
        type="text"
        value={insuranceProvider}
        onChange={(e) => setInsuranceProvider(e.target.value)}
        required
      />
      <label>Policy Number:</label>
      <input
        type="text"
        value={policyNumber}
        onChange={(e) => setPolicyNumber(e.target.value)}
        required
      />
      <label>Coverage Details:</label>
      <textarea
        value={coverageDetails}
        onChange={(e) => setCoverageDetails(e.target.value)}
        required
      />
      <button type="submit">Submit Insurance Details</button>
    </form>
  );
};

export default InsuranceForm;
