import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const InsuranceCover = () => {
  const [coverDetails, setCoverDetails] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const coverRef = ref(db, 'insuranceCover/');
    onValue(coverRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const coverList = Object.values(data);
        setCoverDetails(coverList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Insurance Cover</h2>
      <ul>
        {coverDetails.map((cover, index) => (
          <li key={index}>{cover}</li>
        ))}
      </ul>
    </div>
  );
};

export default InsuranceCover;
