import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import {
  AddPrescription,
  Appointments,
  Content,
  Dashboard,
  HealthRecords,
  HomePage,
  InsuranceCover,
  LogIn,
  Prescriptions,
  ProtectedRoute,
  Sha,
  FormHeader,
  Terms
} from "./pages"
import { user } from './utils/FirebaseConfig';
import { redirect } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route 
          path="/onboarding" 
          loader={() => {
            if (!user) throw redirect("/")
          }}
          element={
            <ProtectedRoute>
              <FormHeader />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
