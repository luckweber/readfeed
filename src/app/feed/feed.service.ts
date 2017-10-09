import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class FeedService{

  feedList = new Array ();
  router:Router;

  getCount(){
    var  countFeeds = [];

    for(let result in localStorage){
        var arrayFeed =JSON.parse(localStorage.getItem(String(result)));
        countFeeds.push(arrayFeed.read );
    }

    return countFeeds.length;
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
      this.router.navigate(['/']);
  }

  addFeed(feed, router){
      var id = 0;
      this.router = router;

    var orderArray  = [];

    if(localStorage.length > 0 ){

        for(let result in localStorage){
            orderArray.push(result);
        }


        var orderArrayFinal = orderArray.sort();


        for(let  i = orderArrayFinal.length-1; i < orderArrayFinal.length; i++){
            id = orderArrayFinal[i];
            id++;
        }


      }else{
        id = 1;
      }


      feed.id = id;

      localStorage.setItem(String(id), JSON.stringify(feed));
      this.router.navigate(['/']);
  }

  getFeedNew(){
    var  countFeeds = [];

    for(let result in localStorage){
        var arrayFeed =JSON.parse(localStorage.getItem(String(result)));

        if(arrayFeed.read == false){
          countFeeds.push(arrayFeed.read );
        }
    }

    return countFeeds.length;
  }

  getFeeds(){
    let  list = [];

    for(let result in localStorage){
        list.push(JSON.parse(localStorage.getItem(String(result))));
    }
    return list;
  }

  getFeedsFavorite(){
    let  list = [];
    for(let result in localStorage){

        var  feeds = JSON.parse(localStorage.getItem(String(result)));

        if(feeds.favorite == true){
            list.push(JSON.parse(localStorage.getItem(String(result))));
        }

    }
    return list;
  }

  getFeedsFavoriteCount(){
    let  list = [];
    for(let result in localStorage){

        var  feeds = JSON.parse(localStorage.getItem(String(result)));

        if(feeds.favorite == true){
            list.push(JSON.parse(localStorage.getItem(String(result))));
        }

    }
    return list.length;
  }

}
