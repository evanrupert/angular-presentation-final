import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';
export const TOGGLE_FINISHED = '[TODO] ToggleFinished';
export const REMOVE_ALL_FINISHED = '[TODO] RemoveAllFinished';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) {}
}

export class ToggleFinished implements Action {
  readonly type = TOGGLE_FINISHED;

  constructor(public payload: number) {}
}

export class RemoveAllFinished implements Action {
  readonly type = REMOVE_ALL_FINISHED;
}

export type Actions
  = AddTodo
  | RemoveTodo
  | ToggleFinished
  | RemoveAllFinished;
