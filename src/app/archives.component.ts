import { Component } from '@angular/core';
import { ArchivesService } from './archives.service';
import { Archive } from './archive';

@Component({
  template: `
    <ul>
      <li *ngFor="let a of archives">
        <a [routerLink]="['archives', a.year, a.month]">{{a.year}}/{{a.month}}</a>
      </li>
    </ul>
  `
})
export class ArchivesComponent {
  archives: Archive[];

  constructor(private _archiveService: ArchivesService)  {
    this.archives = _archiveService.getArchives();
  }

}
