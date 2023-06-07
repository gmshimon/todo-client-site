import React from 'react';
import { Button } from 'react-bootstrap';

const TodoTable = ({todo,index}) => {
    const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/api/v1/todos/${id}`)
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
          <Button variant="danger" onClick={()=>handleDelete(todo._id)}>Delete</Button>{' '}<Button variant="success">Done</Button>{' '}
          </td>
        </tr>
      </tbody>
    </>
    );
};

export default TodoTable;