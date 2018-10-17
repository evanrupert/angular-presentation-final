import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { RemoveAllFinished } from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('todos').subscribe((todos) => {
      this.todos = todos;
    });
  }

  removeFinished() {
    this.store.dispatch(new RemoveAllFinished());
  }

}
