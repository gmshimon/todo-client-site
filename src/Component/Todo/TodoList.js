import React, { useRef, useState } from "react";
import auth from "../../firebase.init";
import Head from "../Head/Head";
import { Form } from "react-bootstrap";

const TodoList = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const catRef = useRef();
  const  timeRef = useRef();

  const handleAddTodo = e=>{
    e.preventDefault();
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    const category = catRef.current.value;
    const time = timeRef.current.value;

    console.log(name, date, category,time);
    const todo = {
      name:name,
      date:date,
      category:category,
      time:time
    }
    fetch('http://localhost:5000/api/v1/todos',{
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  }
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
    </div>
  );
};

export default TodoList;
