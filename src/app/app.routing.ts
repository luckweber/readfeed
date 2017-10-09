import {ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AddComponent } from './feed/add/add.component';
import { RemoveComponent } from './feed/remove/remove.component';
import { EditComponent } from './feed/edit/edit.component';
import { ViewComponent } from './feed/view/view.component';
import { FavoriteComponent } from './feed/favorite/favorite.component';



const APP_ROUTES: Routes = [
  { path:'', component:HomeComponent },
  { path:'feed', component:FeedComponent },
  { path:'add', component:AddComponent },
  { path:'remove/:id', component:RemoveComponent },
  { path:'view/:id', component:ViewComponent },
  { path:'edit/:id', component:EditComponent },
  { path:'favorite', component:FavoriteComponent },
  { path: 'auth', redirectTo: '', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
