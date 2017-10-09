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
    FavoriteComponent
  ],
  exports:[
    AddComponent,
    FeedService,
    RemoveComponent,
    EditComponent,
    ViewComponent,
    FavoriteComponent

  ]
})
export class FeedModule { }
