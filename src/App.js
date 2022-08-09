/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import TheCalculator from './pages/TheCaldulator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul className="nav-list">
          <li className="nav-li">
            <Link to="/" className="nav-item">Home</Link>
            <div className="v-line" />
          </li>
          <li className="nav-li">
            <Link to="/calculator" className="nav-item">Calculator</Link>
            <div className="v-line" />
          </li>
          <li className="nav-li">
            <Link to="/quote" className="nav-item">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/calculator" element={<TheCalculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
