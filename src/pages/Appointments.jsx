import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const appointmentsRef = ref(db, 'appointments/');
    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const appointmentsList = Object.values(data);
        setAppointments(appointmentsList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
