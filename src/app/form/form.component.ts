import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  taskaddeds = "";
  complete = false;
  tasks:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  getAddedTask(forms:NgForm){
      if(this.taskaddeds == ""){
        
      }else{
      this.tasks.push({task:this.taskaddeds,status:this.complete});
      forms.reset();
      this.taskaddeds = "";
      }
  }
}
