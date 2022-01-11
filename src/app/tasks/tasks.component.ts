import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   @Input() tasks:any;
   date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  markComplete(id:number){
    // this.tasks[id].status != this.tasks[id].status;
    if(this.tasks[id].status == true){
      this.tasks[id].status = false;
    }else{
      this.tasks[id].status= true;
    }
  }
  deleteItems(id:number){
    this.tasks.splice(id,1);
  }
}
