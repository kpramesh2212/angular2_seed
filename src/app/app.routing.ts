import { Router, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';
import { AlbumComponent } from './album.component';
import { NavGuard } from './nav-guard.service';

export const appRoute = RouterModule.forRoot([
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [ NavGuard ]
   },
  { path: '*', redirectTo: "contact"},
])
