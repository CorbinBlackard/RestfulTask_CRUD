import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getTasks() {
    return this._http.get('/tasks')
  };
  createNewTask(task) {
    console.log(task)
    return this._http.post('/createTask', task);  
  };
  getTaskID(id) {
    return this._http.get('/tasks/' + id);
  };
  updateTask(updated_task, id) {
    return this._http.post('/tasks/' + id, updated_task);
  };
  deleteTask(id) {
    return this._http.delete('/tasks/' + id)
  }
}
