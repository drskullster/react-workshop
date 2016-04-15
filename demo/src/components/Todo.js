import React from 'react';

const Todo = (props) => {
  const style = {
    textDecoration: props.completed ? 'line-through' : 'none'
  };
  return (
    <li onClick={props.onClick}
      style={style}>
      {props.text}
    </li>
  )
};

export default Todo;
