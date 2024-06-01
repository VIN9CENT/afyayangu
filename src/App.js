import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import Sha from './Sha'
import Terms from './Terms';
import Login from './Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sha" element={<Sha />} />
        <Route path="/terms"element={<Terms/>}/>
        <Route path="/login"element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;