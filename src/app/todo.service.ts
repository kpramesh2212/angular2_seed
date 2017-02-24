import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private _tasks: string[] = new Array();

  addTasks(task: string) {
    this._tasks.push(task);
  }

  removeTasks(task: string) {
    var index = this._tasks.indexOf(task, 0);
    if (index > -1) {
      this._tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this._tasks;
  }

}
