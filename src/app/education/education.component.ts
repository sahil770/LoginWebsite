import { Component, OnInit } from '@angular/core';
import {NgForm}from'@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  details=[];
  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    console.log(f.value);
  }

  getValues(f:NgForm)
  {
    console.log(f.value);

    this.details=f.value;
  }
  

}
