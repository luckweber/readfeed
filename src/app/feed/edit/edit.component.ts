import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http} from '@angular/http';


import { FeedService } from  '../feed.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
    data     : null,

  }

  favoriteCount;

  constructor(private route:ActivatedRoute, private http: Http,service: FeedService, private router: Router) {
    this.services = service;
    this.https = http;
    this.id = this.route.snapshot.params['id'];
    var feedss = JSON.parse(localStorage.getItem(String(this.id)));

    this.dataFeed.title = feedss.title;
    this.dataFeed.url = feedss.url;
    this.dataFeed.info = feedss.info;
    this.dataFeed.favorite = feedss.favorite;
    this.dataFeed.read = feedss.read;
    this.dataFeed.id = feedss.id;
    this.dataFeed.data = feedss.data;

    this.favoriteCount = service.getFeedsFavoriteCount();
    this.feedCount = service.getFeedNew();


    //this.services.editFeed(this.id);
   }


  onSubmit(form){
    var  forms = form.value;
    forms.data = moment().format('D/M/Y, H:mm:ss ');
    this.services.editFeed(this.id, forms);
  }

  ngOnInit() {
    this.feedCount = this.services.getCount();
  }

}
