import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeartComponent } from './heart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
