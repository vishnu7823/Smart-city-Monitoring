import React, { useState } from 'react';
import './Contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with actual submission logic
    alert('Your message has been sent!'); // Confirmation alert
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
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
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>

        <div className="divider" />

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> saran@gmail.com</p>
          <p><strong>Phone:</strong> +91 99999 00000</p>
          <p><strong>Address:</strong> Lovely Professional University, G.T Road, Phagwara, <br></br>Punjab - 144411 </p>
        </div>
      </div>

      <h2>Our Location</h2>
      <div className="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12219.18605034371!2d75.68784298383265!3d31.255816074742945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e1!3m2!1sen!2sin!4v1729616094403!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
