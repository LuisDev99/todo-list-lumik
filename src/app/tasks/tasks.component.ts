import { Component } from '@angular/core';

import { Task } from "../../models/Task"

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[];

  constructor() { 
    this.tasks = [ 
      {name: "Tarea 1", description: "tarea Honduras", estimatedTime: new Date(), state: "pending"},
      {name: "Tarea 2", description: "tarea Progra", estimatedTime: new Date(), state: "pending"},
      {name: "Tarea 3", description: "tarea COD", estimatedTime: new Date(), state: "pending"},
      {name: "Tarea 4", description: "tarea ASD", estimatedTime: new Date(), state: "pending"},
      {name: "Tarea 5", description: "tarea COMPI", estimatedTime: new Date(), state: "pending"},
      {name: "Tarea 6", description: "tarea SISO", estimatedTime: new Date(), state: "pending"},
    ];
  }

  onTaskClick(selectedTask: Task) {
    console.log(selectedTask);
  }

}
