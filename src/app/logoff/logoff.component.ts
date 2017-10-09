import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http} from '@angular/http';


import { FeedService } from  '../feed/feed.service';
@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private service: FeedService, router: Router) {
    service.LogOff();
   }

  ngOnInit() {
  }

}
