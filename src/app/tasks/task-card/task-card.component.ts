import { Component, Input } from '@angular/core';

import { Task } from "../../../models/Task"

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent  {

  @Input()
  task: Task;

}
