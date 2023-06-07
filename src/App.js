import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Component/LoginForm';
import TodoList from './Component/TodoList';
import { Route, Routes } from 'react-router-dom';

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
       <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
};

export default App;
