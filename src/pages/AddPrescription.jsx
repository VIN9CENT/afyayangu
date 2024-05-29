import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database';
// import useUserRole from './useUserRole';

// Did not understand wher useUserRole came from

const AddPrescription = ({ patientId }) => {
  const [prescription, setPrescription] = useState('');
  const auth = getAuth();
  const db = getDatabase();
  // const role = useUserRole();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const user = auth.currentUser;
    // if (user && role === 'provider') {
    //   const prescriptionsRef = ref(db, `users/${patientId}/prescriptions`);
    //   push(prescriptionsRef, { prescription, addedBy: user.uid })
    //     .then(() => {
    //       alert('Prescription added successfully');
    //       setPrescription('');
    //     })
    //     .catch((error) => {
    //       console.error('Error adding prescription:', error);
    //     });
    // } else {
    //   alert('You are not authorized to add prescriptions');
    // }
  };

  // if (role !== 'provider') {
  //   return null; // Render nothing if the user is not a provider
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        placeholder="Enter prescription"
        required
      />
      <button type="submit">Add Prescription</button>
    </form>
  );
};

export default AddPrescription;
