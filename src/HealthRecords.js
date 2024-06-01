import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const HealthRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const recordsRef = ref(db, 'healthRecords/');
    onValue(recordsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const recordsList = Object.values(data);
        setRecords(recordsList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Health Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthRecords;