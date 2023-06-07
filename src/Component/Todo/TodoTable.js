import React from 'react';
import { Button } from 'react-bootstrap';

const TodoTable = ({todo,index}) => {
    const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/api/v1/todos/${id}`)
        .then(res=>res.json())
        .then(data=>alert("Todo Deleted Successfully"))
    }

    const handleUpdateTodo = id =>{
        console.log(id);

        const newTodo = {
            name: todo?.name,
            date: todo?.date,
            category: todo?.category,
            time: todo?.time,
            status:"Done"
        };

        fetch(`http://localhost:5000/api/v1/todos/${id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(newTodo)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <>
      <tbody key={todo._id}>
        <tr>
          <th scope="row">{++index}</th>
          <td>
            {todo.name} 
          </td>
          <td>{todo.date}</td>
          <td>
            {todo.category} 
          </td>
          <td>
            {todo.time} 
          </td>
          <td>
            {
                todo.status==="Pending"?<span className="bg-warning text-white rounded p-1">Pending</span>:<span className="bg-success text-white rounded p-1">Done</span>
            }
          </td>
          <td>
          <Button variant="danger" onClick={()=>handleDelete(todo._id)}>Delete</Button>{' '}<Button variant="success" onClick={()=>handleUpdateTodo(todo._id)}>Done</Button>{' '}
          </td>
        </tr>
      </tbody>
    </>
    );
};

export default TodoTable;