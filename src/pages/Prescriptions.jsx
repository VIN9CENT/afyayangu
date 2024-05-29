import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const db = getDatabase();
    const prescriptionsRef = ref(db, `users/${auth.currentUser?.uid}/prescriptions`);
    onValue(prescriptionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const prescriptionsList = Object.values(data);
        setPrescriptions(prescriptionsList);
      }
    });
  }, [auth]);

  return (
    <div>
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index}>{prescription.prescription}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
