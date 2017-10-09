import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FeedComponent } from './feed/feed.component';
import { AddComponent } from './feed/add/add.component';
import { FeedService } from './feed/feed.service';
import { RemoveComponent } from './feed/remove/remove.component';
import { EditComponent } from './feed/edit/edit.component';
import { FilterSearchPipe } from './feed/filter-search.pipe';
import { ViewComponent } from './feed/view/view.component';
import { FavoriteComponent } from './feed/favorite/favorite.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    AddComponent,
    RemoveComponent,
    EditComponent,
    EditComponent,
    FilterSearchPipe,
    ViewComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
