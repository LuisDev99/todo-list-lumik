import { Component, Input, OnInit } from '@angular/core';

import { Task } from "../../../models/Task"
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent  implements OnInit {

  @Input()
  task: Task;

  public iconState: string = "pending_actions";

  ngOnInit() {
    this.iconState = this.task.state === "Completada" ? "done" : this.task.state === "En Progreso" ? "hourglass_top" : "access_time";
  }
}
