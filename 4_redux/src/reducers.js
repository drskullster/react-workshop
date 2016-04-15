/*
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      id: 0,
      text: 'Consider using Redux',
      completed: true,
    },
    {
      id: 0,
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
import { combineReducers } from 'redux'
import * as types from './actions'

function visibilityFilter(state = types.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case types.TOGGLE_TODO:
      return state.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;

// -> index.js
