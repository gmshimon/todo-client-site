import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Component/Todo/TodoList';
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
};

export default App;
