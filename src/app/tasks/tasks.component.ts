import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailComponent } from "./task-detail/task-detail.component"

import { Task } from "../../models/Task"

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[];
  currentTaskIndex = -1;

  constructor(public dialog: MatDialog) {
    let time = new Date().getMinutes().toString() + " minutos";

    this.tasks = [ 
      {name: "Tarea 1", description: "tarea Honduras", estimatedTime: time, state: "Pendiente"},
      {name: "Tarea 2", description: "tarea Progra", estimatedTime: time, state: "Pendiente"},
      {name: "Tarea 3", description: "tarea COD", estimatedTime: time, state: "Pendiente"},
      {name: "Tarea 4", description: "tarea ASD", estimatedTime: time, state: "Pendiente"},
      {name: "Tarea 5", description: "tarea COMPI", estimatedTime: time, state: "Pendiente"},
      {name: "Tarea 6", description: "tarea SISO", estimatedTime: time, state: "Pendiente"},
    ];
  }

  onTaskClick(selectedTask: Task, index: number) {
    this.currentTaskIndex = index;

    const dialogRef = this.dialog.open(TaskDetailComponent, {
      data: {
        ...selectedTask,
      }
    });

    dialogRef.afterClosed().subscribe(editedTaskInfo => {
      if(editedTaskInfo != null)
        this.tasks[this.currentTaskIndex] = {...editedTaskInfo};
    });
  }

}
