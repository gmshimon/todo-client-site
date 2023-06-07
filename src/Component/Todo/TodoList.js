import React, { useState } from 'react';
import auth from "../../firebase.init";
import Head from '../Head/Head';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div>
      <Head/>
      <div style={{marginTop:'80px'}} >
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;
