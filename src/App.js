import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home';
import Analysis from './Components/Analysis/Analysis';
import Improvement from './Components/Improvements/Improvement';
import About from './Components/About/About';
import ContactUs from './Components/Contactus/Contactus';
import Register from './Components/Register/Register.js'; // Assuming you have this component

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (formData) => {
    setUser({ name: formData.name, profilePic: null });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="main-content">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/improvements" element={<Improvement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
