import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Task } from "../../../models/Task"

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  public task: Task;

  constructor(
    public dialogRef: MatDialogRef<TaskDetailComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
      this.task = {...data};
    }

  onExit() {
    this.dialogRef.close();
  }
}