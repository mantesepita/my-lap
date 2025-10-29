import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/home">Home</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <Dashboard/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
