import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userData = localStorage.getItem('userData');

    if (!userData) {
      setError('No user data found');
      return;
    }

    // Parse the stored JSON string into a JavaScript object
    const userDataObj = JSON.parse(userData);

    // Find the user with matching email and password
    const user = userDataObj.users.find(
      u => u.email === email && u.password === password,
    );
    if (user) {
      localStorage.setItem('loggedIn', true);
    }

    if (!user) {
      setError('Invalid email or password');
      return;
    }

    // Redirect to the home page or perform any other necessary actions
    window.location.href = '/home';
  };

  return (
    <div className='login-main-div'>
      <div className='login-page'>
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div className='login-div'>
            <label className='login-label'>Email:</label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='login-div'>
            <label className='login-label'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='btn-login'>
            <button type='submit' className='login-btn'>
              Login
            </button>
          </div>
          <div><p>New member? <span><Link to="/registration">Register</Link></span> here.</p></div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;