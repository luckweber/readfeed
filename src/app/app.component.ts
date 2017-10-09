import { Component } from '@angular/core';
import  { FeedService } from './feed/feed.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private service: FeedService, private router: Router){

  }
}
