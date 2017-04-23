import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
  constructor(private http:Http){
    console.log('Task Service initialized');
  }

  getTasks(){
    return this.http.get('/api/tasks')
      .map(res => res.json());
  }

  addTask(task: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(task);
    console.log('task');
    return this.http.post(
      '/api/task',
      JSON.stringify(task),
      {headers: headers}
    )
      .map(res => res.json());
  }

  removeTask(id: string){
    return this.http.delete(`/api/task/${id}`)
      .map(res => res.json());
  }

}
