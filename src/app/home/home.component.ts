import { Component, OnInit } from '@angular/core';
import  { FeedService } from '../feed/feed.service';
import { Router, ActivatedRoute } from '@angular/router';


import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  f:any = [];
  feeds: FeedService;
  routers;

  feedCount;
  favoriteCount;
  filter:string;

  constructor(feedsList: FeedService, private router: Router) {
    this.feeds = feedsList;
    this.favoriteCount = this.feeds.getFeedsFavoriteCount();
    this.routers = this.router;
    this.feedCount = this.feeds.getFeedNew();


    this.feeds.login();
  }




  getFilter(){

    if(this.f.length === 0 || this.filter === undefined || this.filter.trim() === undefined ){
        return this.f;
    }

        return this.f.filter(proj => {
            if(proj.title.indexOf(this.filter) >= 0){
                  return true;
            }

            return false;
        });


  }

  setFavorite(id){
    this.feeds.setFavorite(id);
    this.f = this.feeds.getFeeds();
  }

  ngOnInit() {
    this.f = this.feeds.getFeeds();


  }

}
