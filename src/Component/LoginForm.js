import React, { useState } from 'react';
import './loginPage.css'
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  </div>
  );
};

export default LoginForm;
