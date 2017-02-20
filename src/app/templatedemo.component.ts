import { Component } from '@angular/core';

@Component({
  selector: 'templatedemo',
  template: `
    <div *ngIf="courses.length > 0">This is shown if courses length greater than zero using ngif</div>
    <div *ngIf="courses.length == 0">This is shown if courses length=0 using ngif</div>
    <div [hidden]="courses.length > 0">This is shown if length greater than zero using hidden property</div>
    <div [hidden]="courses.length == 0">This is shown if length == 0 using hidden property</div>
    <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'"><a (click)="viewMode='map'">Map View</a></li>
      <li [class.active]="viewMode == 'list'"><a (click)="viewMode='list'">List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
      <template [ngSwitchCase]="'map'">This is map veiw contents</template>
      <template [ngSwitchCase]="'list'">This is list veiw contents</template>
    </div><br>
    <div *ngFor="let course of courses; let i = index">{{i + 1}} {{course}}</div><br>
    <div>{{content | summary:100}}</div>
  `
})
export class TemplateDemo {
   courses :string[] = ['Courses1', 'Courses2', 'Courses3'];
   viewMode = 'map';
   content = `You asked the world to love you with your signature “Love Me” campaign,
   and the answer was a resounding
   “We will!” You’ve become the poster boy for spreading the L-O-V-E as
   your trademark tagline has spread around the world – from Paris to Istanbul,
   Los Angeles to Berlin, Brooklyn to Chelsea. There was no time to play secret admirer,
   so we reached out to you when we wanted our STORY wall to bring “Love” to life.
   But that was just the first spark. Inspiration struck – and like all good romances,
   this collaboration blossomed into something that extends beyond our four walls.`;
}
