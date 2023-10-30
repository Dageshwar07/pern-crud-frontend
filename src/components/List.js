import React, { useEffect, useState } from "react";
import Edit from "./Edit";

const List = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsondata = await response.json();
      setTodos(jsondata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  });

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(deleteTodo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>List todo</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>description</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>{<Edit todo={todo} />}</td>
              <td>
              <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.todo_id)}
              >
              Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
