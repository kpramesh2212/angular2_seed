import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
    <div class="panel panel-default">
      <div class="panel-body" (click)="isHidden=!isHidden">
        {{title}}<i class="glyphicon pull-right" [ngClass]= "{
          'glyphicon-chevron-up': !isHidden,
          'glyphicon-chevron-down': isHidden
        }"></i>
      </div>
      <div class="panel-body" [hidden]="isHidden">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .highlight {
      cursor: pointer;
    }

  `]
})
export class ZippyComponent {
  isHidden = true;
  @Input() title = 'May be you should pass in a title';
}
