import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  maxDate = new Date();
  constructor() {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }


}
