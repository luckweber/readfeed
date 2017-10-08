import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import  { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  f:any = [];
  feeds: FeedService;
  feedCount = 1;


  constructor(feedsList: FeedService) {
    //http: Http = new Http();
    this.feeds = feedsList;
   }

  ngOnInit() {
    this.f = this.feeds.getFeeds();
    this.feedCount = this.feeds.getCount();
  }

}
