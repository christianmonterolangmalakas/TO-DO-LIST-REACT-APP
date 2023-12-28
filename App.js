import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [containerColor, setContainerColor] = useState(getRandomColor());
  const [addButtonColor, setAddButtonColor] = useState(getRandomColor());
  const [deleteButtonColor, setDeleteButtonColor] = useState(getRandomColor());

  const bodyRef = useRef(document.body);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newContainerColor = getRandomColor();
      setContainerColor(newContainerColor);
      setAddButtonColor(getRandomColor());
      setDeleteButtonColor(getRandomColor());

      
      bodyRef.current.style.backgroundColor = getRandomColor();
    }, 4000); 

    return () => clearInterval(intervalId); 
  }, []);

  const addTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = {
        text: newTodo,
        color: todos[editIndex].color,
      };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else if (newTodo.trim() !== "") {
      const newColor = getRandomColor();
      setTodos([...todos, { text: newTodo, color: newColor }]);
      setContainerColor(getRandomColor());
      setAddButtonColor(getRandomColor());
      setDeleteButtonColor(getRandomColor());

     
      bodyRef.current.style.backgroundColor = getRandomColor();
    }
    setNewTodo("");
  };

  const editTodo = (index) => {
    setNewTodo(todos[index].text);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditIndex(null);
    setContainerColor(getRandomColor());
    setAddButtonColor(getRandomColor());
    setDeleteButtonColor(getRandomColor());

   
    bodyRef.current.style.backgroundColor = getRandomColor();
  };

  return (
    <div className="container" style={{ backgroundColor: containerColor }}>
      <h1>Montero's To-Do List Application</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo} style={{ backgroundColor: addButtonColor }}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            style={{ backgroundColor: todo.color }}
          >
            {todo.text}
            <div className="button-container">
              <button
                className="edit-button"
                onClick={() => editTodo(index)}
                style={{ backgroundColor: addButtonColor }}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
                style={{ backgroundColor: deleteButtonColor }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
