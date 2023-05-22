import React, { useState } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    // Perform input validation
    if (!email || !phoneNumber || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Create a user object with the provided data
    const user = {
      email,
      phoneNumber,
      password,
    };

    // Retrieve existing user data from localStorage
    const userData = localStorage.getItem('userData');
    let userDataObj = {};

    if (userData) {
      // Parse the stored JSON string into a JavaScript object
      userDataObj = JSON.parse(userData);
    }

    // Update the userData object with the new user data
    userDataObj.users = [...(userDataObj.users || []), user];

    // Update the localStorage with the updated user data
    localStorage.setItem('userData', JSON.stringify(userDataObj));

    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className='reg-container'>
      <div className='reg-contain'>
        <p className='para'>Already member? <span><Link to='/login' className='reg-login'>Login</Link></span> here.</p>
        <h2>Registration Page</h2>
        <form onSubmit={handleRegistration}>
          <div className='registration-input'>
          <div className='reg-input'>
            <label className='reg-label'>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='reg-input'>
            <label className='reg-label'>Phone Number:</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='reg-input'>
            <label className='reg-label'>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='btn-reg'>
            <button type="submit" className='reg-btn'>Register</button>
          </div>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;