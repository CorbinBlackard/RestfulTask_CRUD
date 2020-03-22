import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app'
  tasks: any;
  show_task: object;
  showAllTasks: boolean;
  newTask: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.showAllTasks = false;
    this.newTask = { title: "", description: "" }
  };

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data.tasks;
    })
  };

  postToServer() {
    let observable1 = this._httpService.createNewTask(this.newTask)
    observable1.subscribe(data => {
      console.log("got the variable", data);
    })
    this.getTasksFromService();
  };

  showTask(id) {
    let observable2 = this._httpService.getTaskID(id);
    observable2.subscribe(data => {
      console.log("Got task by ID!", data);
      this.show_task = data.task;
    })
  };

  updateTask(id) {
    this._httpService.updateTask(this.show_task, id).subscribe(data => {
      console.log("You updated your task", data);
      this.getTasksFromService();
    })
  };

  deleteTask(id) {
    this._httpService.deleteTask(id).subscribe(data => {
      console.log("You deleted your task", data);
      this.getTasksFromService();
    })
  };

};