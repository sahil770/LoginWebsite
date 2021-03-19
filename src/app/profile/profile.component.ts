import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
