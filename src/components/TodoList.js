import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const createItem = (newTodo) => {
    setTodos(todos.concat(newTodo));
  }

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // filter out the  item 
  };
  const updateItem = (id,updateTodo)=>{
    const updateTodos = todos.map(todo =>{
      if(todo.id === id){
        return {...todo,task:updateTodo}
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  const todosData = todos.map((todo) => {  //todos are mapped and todo is selected.
    return <Todo key={todo.id} 
                id={todo.id} 
                item={todo.task} 
                removeTodo={removeItem} 
                updateData = {updateItem}/>;
  });

  return (
    <div>
      <h1>Todo List App</h1>
      <NewTodoForm createTodo={createItem} />
      <ul>{todosData}</ul>
    </div>
  );
}
