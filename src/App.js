import React, { useState } from 'react';
import LoginForm from './Component/LoginForm';
import TodoList from './Component/TodoList';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Implement your login logic here
    // For simplicity, let's just set loggedIn to true if the username and password are not empty
    if (username && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {loggedIn ? <TodoList /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;
