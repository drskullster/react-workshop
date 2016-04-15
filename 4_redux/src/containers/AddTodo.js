import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = (props) => {
  let inputValue;

  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      props.dispatch(addTodo(inputValue))
    }}>
      <p className="form-group">
        <input className="form-control" onChange={(e) => {inputValue = e.target.value;}} />
      </p>
      {" "}
      <p className="form-group">
        <button className="btn btn-primary">
          Add Todo
        </button>
      </p>
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

// -> components/TodoList.js
