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
import { FormBuilderFormComponent } from './form-builder-form.component';
import { CustomFormValidationComponent } from './custom-form-validation.component';
import { ChangePasswordFormComponent } from './change-password-form.component';
import { RxSearchComponent } from './rxsearch.component';
import { PostService } from './post.service';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { PostComponent } from './post.component';
import { GitService } from './git.service';
import { GitUserComponent } from './gituser.component';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoService } from './todo.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule],
  declarations: [
    AppComponent,
    HeartComponent,
    TweetComponent,
    TemplateDemo,
    SummaryPipe,
    ZippyComponent,
    ContactFormComponent,
    SubscriptionFormComponent,
    ComplexFormComponent,
    FormBuilderFormComponent,
    CustomFormValidationComponent,
    ChangePasswordFormComponent,
    RxSearchComponent,
    PostComponent,
    GitUserComponent,
    TodoComponent,
    TodoItemComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [
    TweetService,
    PostService,
    GitService,
    TodoService
  ]
})
export class AppModule { }
