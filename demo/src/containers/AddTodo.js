import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

let AddTodo = (props) => {
  let inputValue;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.dispatch(addTodo(inputValue));
    }}>
      <p>
        <input onChange={(e) => {
          inputValue = e.target.value;
        }} />
      </p>
      <p>
      <button>Add todo</button>
      </p>
    </form>
  );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
