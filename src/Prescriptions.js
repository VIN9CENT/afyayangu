// Prescription.js
import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

const Prescriptions = ({ user }) => {
  const [prescription, setPrescription] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleAddPrescription = () => {
    const db = getDatabase();
    const prescriptionsRef = ref(db, `prescriptions/${user.uid}`);

    const newPrescription = {
      prescription,
      doctor,
      date: new Date().toISOString(),
    };

    push(prescriptionsRef, newPrescription)
      .then(() => {
        setPrescription('');
        setDoctor('');
      })
      .catch((error) => {
        console.error('Error adding prescription:', error);
      });
  };

  return (
    <div>
      <h2>Add Prescription</h2>
      <input
        type="text"
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        placeholder="Prescription details"
      />
      <input
        type="text"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        placeholder="Doctor's name"
      />
      <button onClick={handleAddPrescription}>Add Prescription</button>
    </div>
  );
};

export default Prescriptions;
