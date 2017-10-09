import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { FeedService } from './feed.service';
import { RemoveComponent } from './remove/remove.component';
import { EditComponent } from './edit/edit.component';
import { FilterSearchPipe } from './filter-search.pipe';
import { ViewComponent } from './view/view.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AddComponent,
    FeedService,
    RemoveComponent,
    EditComponent,
    FilterSearchPipe,
    ViewComponent,
    FavoriteComponent,
    LoginComponent
  ],
  exports:[
    AddComponent,
    FeedService,
    RemoveComponent,
    EditComponent,
    ViewComponent,
    FavoriteComponent,
    LoginComponent

  ]
})
export class FeedModule { }
