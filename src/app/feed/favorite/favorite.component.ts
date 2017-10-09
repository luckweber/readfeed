import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  f:any = [];
  feeds: FeedService;
  routers;

  feedCount;
  favoriteCount;
  filter:string;

  constructor(feedsList: FeedService, private router: Router) {
    this.favoriteCount = feedsList.getFeedsFavoriteCount();
    this.feeds = feedsList;
    this.routers = this.router;
    this.feedCount = feedsList.getFeedNew();
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
    this.f = this.feeds.getFeedsFavorite();
  }

  ngOnInit() {
    this.f = this.feeds.getFeedsFavorite();
  }

}
