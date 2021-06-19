import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task} from '../../Task';
import {TASKS} from '../../mock-task';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task : Task | undefined
  constructor( private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParam.get('taskId')); //get ID task

    this.task = TASKS.find(Task => Task.id === taskIdFromRoute ); // get task has ID current
  } 

}
