import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Company Logo */}
      <div className="navbar-left">
        <Link to="/" className="company-logo">City-Monitor</Link>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="navbar-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/analysis')}>Analysis</li>
        <li onClick={() => navigate('/improvements')}>Improvements</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contactus')}>Contact Us</li>
      </ul>

      {/* Right Side: Profile or Register */}
      <div className="navbar-right">
        {!user ? (
          <button className="register-btn" onClick={() => navigate('/register')}>
            Register
          </button>
        ) : (
          <div className="profile-section" onClick={toggleDropdown}>
            <div className="profile-icon">
              {user.profilePic ? (
                <img src={user.profilePic} alt="Profile" className="profile-pic" />
              ) : (
                <span className="default-profile-icon">👤</span>
              )}
              <span className="profile-name">{user.name}</span>
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => navigate('/profile')}>Profile</li>
                  <li onClick={onLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
