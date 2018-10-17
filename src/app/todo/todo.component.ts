import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { RemoveTodo, ToggleFinished } from '../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  removeTodo() {
    this.store.dispatch(new RemoveTodo(this.todo.id));
  }

  toggleFinished() {
    this.store.dispatch(new ToggleFinished(this.todo.id));
  }

}
