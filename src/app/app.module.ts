import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeartComponent } from './heart.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { TemplateDemo } from './templatedemo.component';
import { SummaryPipe } from './summary.pipe';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SubscriptionFormComponent } from './subscription-form.component';
import { ComplexFormComponent } from './complex-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    HeartComponent,
    TweetComponent,
    TemplateDemo,
    SummaryPipe,
    ZippyComponent,
    ContactFormComponent,
    SubscriptionFormComponent,
    ComplexFormComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [TweetService]
})
export class AppModule { }
