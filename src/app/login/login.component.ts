import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http} from '@angular/http';


import { FeedService } from  '../feed/feed.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login ={
    email: 'Test@test.com',
    pass: 'pass'
  };

  loginValid;

  constructor(private service: FeedService, router: Router) {
    this.loginValid = service;
   }

  onSubmit(form){
    console.log(form);
    this.loginValid.validLogin(form);

  }

  ngOnInit() {
  }

}
