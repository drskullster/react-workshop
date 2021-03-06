import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {
      props.todos.map(todo => {
        return <Todo key={todo.id} {...todo}
           onClick={() => props.onTodoClick(todo.id)} />
      })
    }
  </ul>
);

export default TodoList;
