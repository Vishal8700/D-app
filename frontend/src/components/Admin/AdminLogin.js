import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; // Ensure you have CSS for styling

function AdminLogin({ onLogin, onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/admin/login', { username, password });
      localStorage.setItem('token', response.data.token); // Save the token
      onLogin();
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <button type="button" onClick={onSwitch}>Signup</button>
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;
