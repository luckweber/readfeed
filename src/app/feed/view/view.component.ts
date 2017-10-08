import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http} from '@angular/http';


import { FeedService } from  '../feed.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  feedCount = 1;
  f:any = [];
  something = null;
  length = null;
  services: FeedService;
  https: Http;
  id:any;
  feededit;

  dataFeed: any = {
    title    : "null",
    url      :  null,
    info     :  null,
    favorite : null,
    id       : null,
    read     :false,
    data     :null

  }


  constructor(private route:ActivatedRoute, private http: Http,service: FeedService, private router: Router) {
    this.services = service;
    this.https = http;
    this.id = this.route.snapshot.params['id'];
    var feedss = JSON.parse(localStorage.getItem(String(this.id)));

    this.dataFeed.title = feedss.title;
    this.dataFeed.url = feedss.url;
    this.dataFeed.info = feedss.info;
    this.dataFeed.favorite = feedss.favorite;
    this.dataFeed.read = feedss.rea;
    this.dataFeed.id = feedss.id;
    this.dataFeed.data = feedss.data;

    //this.services.editFeed(this.id);
   }

  ngOnInit() {
      this.services.setFeedRead(this.id , this.dataFeed );
  }

}
