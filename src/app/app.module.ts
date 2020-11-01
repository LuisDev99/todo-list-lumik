import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskCardComponent } from "./tasks/task-card/task-card.component"
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component"

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCardComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
