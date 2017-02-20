import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeartComponent } from './heart.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { TemplateDemo } from './templatedemo.component';
import { SummaryPipe } from './summary.pipe';
import { ZippyComponent } from './zippy.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeartComponent, TweetComponent, TemplateDemo, SummaryPipe, ZippyComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [TweetService]
})
export class AppModule { }
