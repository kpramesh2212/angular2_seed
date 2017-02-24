import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoNotification } from './todonotification';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './app/html/todo.component.html'
})
export class TodoComponent {
  tasks: string[];
  taskAdder = new FormControl();

  constructor(private _todoService: TodoService) {
  }

  onChange(task: string) {
    this._todoService.addTasks(task);
    this.taskAdder.setValue('');
    this.tasks = this._todoService.getTasks();
  }

  onTaskNotification(notification: TodoNotification) {
    if (notification.remove) {
      this._todoService.removeTasks(notification.task);
    }
    this.tasks = this._todoService.getTasks();
  }

}
