import React from 'react';
import { Button } from 'react-bootstrap';

const TodoTable = ({todo,index}) => {
    console.log(todo);
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
            <span className="bg-warning text-white rounded p-1">Pending</span>
          </td>
          <td>
          <Button variant="danger">Delete</Button>{' '}<Button variant="success">Done</Button>{' '}
          </td>
        </tr>
      </tbody>
    </>
    );
};

export default TodoTable;