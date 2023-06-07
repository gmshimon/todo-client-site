import React, { useEffect, useRef, useState } from "react";
import auth from "../../firebase.init";
import Head from "../Head/Head";
import { Form } from "react-bootstrap";
import TodoTable from "./TodoTable";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const nameRef = useRef();
  const dateRef = useRef();
  const catRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.data));
  }, [todos]);
  const handleAddTodo = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    const category = catRef.current.value;
    const time = timeRef.current.value;

    console.log(name, date, category, time);
    const todo = {
      name: name,
      date: date,
      category: category,
      time: time,
      status:"Pending"
    };
    fetch("http://localhost:5000/api/v1/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  let index = 0;
  return (
    <div>
      <Head />
      <div style={{ marginTop: "80px" }}>
        <h1 className="text-danger text-center">Add Todo</h1>
        <br />
        <form onSubmit={handleAddTodo} className="w-25 mx-auto ">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              required
              ref={nameRef}
              type="text"
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              required
              ref={dateRef}
              type="date"
              placeholder="Enter Food Price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              required
              ref={timeRef}
              type="time"
              placeholder="Time"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <select
              className="form-select"
              ref={catRef}
              aria-label="Default select example"
            >
              <option selected>Priority</option>
              <option defaultValue="BreakFast">High</option>
              <option defaultValue="Lunch">Medium</option>
              <option defaultValue="Drinks">Low</option>
            </select>
          </Form.Group>

          <input className="btn btn-danger" type="submit" name="" id="" />
        </form>
      </div>
      <div className="mt-5">
        <table className="table caption-top ml-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Priority</th>
              <th scope="col">time</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {todos.map((todo) => {
            return (
              <TodoTable key={todo._id} todo={todo} index={index++}></TodoTable>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TodoList;
