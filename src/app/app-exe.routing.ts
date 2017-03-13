import { Router, RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive.component';
import { ArchivesComponent } from './archives.component';

export const RouteExe = RouterModule.forRoot([
  {path: "", component: ArchivesComponent } ,
  {path: 'archives/:year/:month', component: ArchiveComponent },
  { path: '**', redirectTo: "/"}
])
