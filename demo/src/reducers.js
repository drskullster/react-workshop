import * as type from './constants';
import {combineReducers} from 'redux';

function visibilityFilter(state = type.VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case type.SET_VISIBILITY_FILTER :
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case type.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case type.TOGGLE_TODO:
      return state.map((item) => {
        if(action.id !== item.id) {
          return item;
        }

        return Object.assign({}, item, {
          completed: !item.completed
        });
      });
    default:
      return state;
  }
}

const todoReducer = combineReducers({
  visibilityFilter,
  todos
});

export default todoReducer;
