import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Angular'; }
