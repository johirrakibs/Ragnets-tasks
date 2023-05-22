import React, { useState } from 'react';
import './profile.css';

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!newEmail || !newPassword) {
      setSuccessMessage('Please fill in all fields');
      return;
    }
    setEmail(newEmail);
    setPassword(newPassword);
    setNewEmail('');
    setNewPassword('');
    setSuccessMessage('Profile updated successfully');
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <form onSubmit={handleUpdateProfile}>
      
        <div className="profile-input">
          <label>New Email:</label>
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="profile-input">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="profile-btn">
          <button type="submit">Update Profile</button>
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default ProfilePage;
