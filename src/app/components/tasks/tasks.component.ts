import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task'
// import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
    ) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTaskService(task)
    .subscribe(
      () => this.tasks = this.tasks.filter(eachTask => eachTask.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
  

}
