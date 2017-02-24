import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './app/html/todo-item.component.html'
})
export class TodoItemComponent {
    @Input() value: string = '';
    @Output() taskNotification = new EventEmitter();
    completed = false;

    private onRemove() {
      this.taskNotification.emit({remove: true, task: this.value});
    }

    private toggle(completed: boolean) {
      this.completed = completed;
      if (this.completed) {
        this.taskNotification.emit({completed: true, task: this.value});
      } else {
        this.taskNotification.emit({completed: false, task: this.value});
      }
    }
}
