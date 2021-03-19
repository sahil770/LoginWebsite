import { Component, OnInit } from '@angular/core';
import {NgForm}from'@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

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
