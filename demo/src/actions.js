import * as type from './constants';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: type.ADD_TODO,
    text,
    id: nextTodoId++
  };
};

export const toggleTodo = (id) => {
  return {
    type: type.TOGGLE_TODO,
    id
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: type.SET_VISIBILITY_FILTER,
    filter
  }
}
