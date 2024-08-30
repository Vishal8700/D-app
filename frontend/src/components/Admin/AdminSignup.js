import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; // Ensure you have CSS for styling

function AdminSignup({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/admin/register', { username, password });
      alert('Admin registered');
      onSwitch();
    } catch (error) {
      setError('Error registering user');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Admin Signup</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Signup</button>
        <p>
          Already have an account?{' '}
          <button type="button" onClick={onSwitch}>Login</button>
        </p>
      </form>
    </div>
  );
}

export default AdminSignup;
