import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/Task'

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent  {
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService){
    this.taskService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;

      });
  }

  addTask(e:any){
    e.preventDefault();

    let newTask = {
      title: this.title,
      isDone: false

    };

    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });

  }

  removeTask(id: string){
    let tasks = this.tasks;

    this.taskService.removeTask(id)
      .subscribe(task => {
        console.log(task);
      // this.tasks = tasks;

    });
    tasks.forEach((elem, i) => {
      if (elem._id === id){

      console.log(elem._id);
      tasks.splice(i, 1);
      }

    });

  }
}
