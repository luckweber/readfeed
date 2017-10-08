import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { FeedService } from  '../feed.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  feedCount = 1;
  f:any = [];
  feeds: FeedService;
  https: Http;
  something = null;
  length = null;

  data;

  dataFeed: any = {
    title    : null,
    url      :  null,
    info     :  null,
    favorite : null,
    id       : this.feedCount,
    read     : false,
    data     : null
  }



  constructor(feedsList: FeedService, private http: Http,  private router: Router) {
    //http: Http = new Http();
    this.feeds = feedsList;
    this.dataFeed.data = moment().format('D/M/Y, H:mm:ss ');
    this.https = http;

   }



  onSubmit(form){
    //console.log(form);
    //console.log(JSON.stringify(form.value));

    this.dataFeed.id = this.feeds.getCount();
    this.length = localStorage.length + 1;
    this.router.navigate(['/']);
    localStorage.setItem(this.length, JSON.stringify(form.value));
    /*
    this.https.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe( data => {
      if(data.status == 200){
          this.length = localStorage.length + 1;

          this.router.navigate(['/']);
          localStorage.setItem(this.length, JSON.stringify(form.value));
      }else{
          this.router.navigate(['/add']);
      }

    });
    */

     //this.router.navigate(['/']);
  }



  ngOnInit() {
    //this.f = this.feeds.getFeeds();
    this.feedCount = this.feeds.getCount();
  }

}
