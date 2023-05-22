import React, { useState } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Fetch user details from the server or localStorage and update the state

  const handleUpdateProfile = e => {
    e.preventDefault();

    // Perform update profile logic here

    // Redirect to the profile page or perform any other necessary actions
    window.location.href = '/profile';
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
