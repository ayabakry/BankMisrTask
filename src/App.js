import HomePage from './Component/Homepage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nabvar from './Component/Navbar';
import Details from './Component/DetailsPgae';

const App = () => {
  return (
    <Router>
      <Nabvar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
