import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  id:any;
  service;
  routes;
  constructor(private router: Router, private route:ActivatedRoute, private feedService:FeedService) {
    this.id = this.route.snapshot.params['id'];
    this.service = this.feedService;
    this.routes = this.router;
    console.log(this.route);
   }

  ngOnInit() {
    this.service.delete(this.id,   this.routes);
  }

}
