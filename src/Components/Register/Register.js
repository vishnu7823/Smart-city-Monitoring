import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Add this for custom styling

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onRegister(formData); // Call the parent function to update the navbar
    setShowConfirmation(true); // Show confirmation message

    // Redirect to home page after a short delay
    setTimeout(() => {
      navigate('/'); // Redirect to home page after successful registration
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {showConfirmation && (
        <div className="confirmation-message">
          Registration successful! Redirecting to home...
        </div>
      )}
    </div>
  );
};

export default Register;
