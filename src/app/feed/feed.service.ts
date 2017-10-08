import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class FeedService{

  feedList = new Array ();
  router:Router;

  getCount(){
    if(localStorage.length == 0){
        return 1;
    }else{
      return localStorage.length+1;
    }
  }

  setFeedRead(id, feed){
    feed.read = true;
    localStorage.setItem(id, JSON.stringify(feed));
  }


  setFavorite(id){
    var  feed = JSON.parse(localStorage.getItem(String(id)));
    if(feed.favorite == null){
      feed.favorite = true;
    }else{
      feed.favorite = null;
    }
    localStorage.setItem(id, JSON.stringify(feed));

  }

  editFeed(id, feed){
    localStorage.setItem(id, JSON.stringify(feed));
  }

  delete(id, router){
    this.router = router;
    localStorage.removeItem(id);
    var valor = id-1;
    this.feedList.splice(valor,1);
    this.router.navigate(['/']);
  }

  getFeedNew(){
    var  countFeeds = [];
    for(  let i = 0;  i  < localStorage.length; i++  ){

        var arrayFeed = JSON.parse(localStorage.getItem(String(i+1)));

          if(arrayFeed.read == false){
              countFeeds.push(arrayFeed.read );
          }
    }

    return countFeeds.length;

  }

  getFeeds(){
      for(  let i = 0;  i  < localStorage.length; i++ ){
          var  getId = JSON.parse(localStorage.getItem(String(i+1)));
          var id = getId.id;
          this.feedList[i] = JSON.parse(localStorage.getItem(String(i+1)));
      }
    return this.feedList;
  }

}
