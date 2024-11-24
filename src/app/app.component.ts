import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, CommonModule, StoreModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'PrvaAplikacija';
  todoList: string[] = []; 
  todoInput: string = ''; 

  addTodo() {
    if (this.todoInput.trim()) {
      this.todoList.push(this.todoInput.trim()); 
      this.todoInput = ''; 
    }
  }
  deleteTodo(todo: any) {
    const index = this.todoList.indexOf(todo)
    if (index > -1) {
      this.todoList.splice(index, 1)
    }
  }
}
