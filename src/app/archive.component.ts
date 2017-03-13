import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
  template: `
    <h1>Archives</h1>
    <div>{{year}} / {{month}}</div>
  `
})
export class ArchiveComponent implements OnInit, OnDestroy {
  year: number;
  month: number;
  sub :Subscription

  constructor(private _ar: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this._ar.params.subscribe( params => {
      this.year = params["year"];
      this.month = params["month"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
