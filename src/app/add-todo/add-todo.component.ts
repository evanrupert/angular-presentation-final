import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AddTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  currentId = 0;
  newTodoText = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(): void {
    this.store.dispatch(new AddTodo({
      id: this.currentId++,
      title: this.newTodoText,
      finished: false
    }));

    this.newTodoText = '';
  }

}
