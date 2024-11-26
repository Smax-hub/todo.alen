import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './store/todo.model';
import { addTodo, removeTodo } from './store/todo.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, StoreModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PrvaAplikacija';
  todoList$: Observable<Todo[]>;
  todoInput: string = '';

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todoList$ = this.store.select((state) => state.todos.todos);
  }

  ngOnInit() {
    // console.log za provjeru store
    this.todoList$.subscribe((todos) => {
      console.log('Trenutni broj todosa u store:', todos);
    });
  }

  addTodo() {
    if (this.todoInput.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.todoInput.trim(),
      };

      this.store.dispatch(addTodo({ todo: newTodo }));
      this.todoInput = '';
    }
  }

  deleteTodo(todoId: number) {
    this.store.dispatch(removeTodo({ id: todoId }));
  }
}
