import { Todo } from '../models/todo';
import * as TodoStore from '../actions/todo.actions';

const initialState = [];

export function todoReducer(state: Todo[] = initialState, action: TodoStore.Actions) {
  switch (action.type) {
    case TodoStore.ADD_TODO:
      state.unshift(action.payload);
      return state;
    case TodoStore.REMOVE_TODO:
      return state.filter(t => t.id !== action.payload);
    case TodoStore.TOGGLE_FINISHED:
      state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.finished = !todo.finished;
        }
      });
      return state;
    case TodoStore.REMOVE_ALL_FINISHED:
      return state.filter(todo => !todo.finished);
    default:
      return state;
  }
}
