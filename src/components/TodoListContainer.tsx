import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";

import TodoListItem, { ITodo } from "./TodoListItem";
import { todosData } from "../todo-data";

function mockTodos(todoItems: ITodo[]): Promise<ITodo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todoItems);
    }, 1500);
  });
}

const TodoListContainer = () => {
  const [todos, setTodos] = useState([] as ITodo[]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todoData = await mockTodos(todosData);
        setTodos(todoData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodos();
  }, []);

  return (
    <List>
      {todos && todos.length > 0
        ? todos.map((todo) => {
            return <TodoListItem key={todo.id} todoInfo={todo} />;
          })
        : null}
    </List>
  );
};

export default TodoListContainer;
