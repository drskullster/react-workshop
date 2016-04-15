import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo /* id={todo.id} text={todo.text} completed={todo.completed} */}
        onClick={() => props.onTodoClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;

// -> Todo.js
