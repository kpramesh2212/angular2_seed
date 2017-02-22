import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'rxsearch',
  template: `
    <form [formGroup]="form">
      <input type='text' class="form-control" formControlName="search">
    </form>

  `
})
export class RxSearchComponent {
  form: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  constructor() {
    var search =  this.form.controls['search'];
    search.valueChanges
          .debounceTime(400)
          .map(str => (<string>str).replace(' ', '-'))
          .subscribe(x => console.log(x));

    // //Rx Js: Observable from arrays
    // var startDates = [];
    // var startDate = new Date();
    // console.log(startDate)
    // for (var day = -2; day <= 2; day++) {
    //   var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
    //   startDates.push(date);
    // }
    //
    // Observable.from(startDates)
    //           .map(date =>  {console.log("Getting deals for date"+ date);return [1,2,3]})
    //           .subscribe(x => console.log(x));
    //
    // //Rx Js: creating observable from of operator
    // Observable.of(1).subscribe(x => console.log(x));
    // Observable.of(1, 2, 3).subscribe(x => console.log(x));
    // Observable.of([1, 2, 3]).subscribe(x => console.log(x));
    //
    // //Rx Js: Creating Observable from empty
    // Observable.empty().subscribe(x => console.log(x));
    //
    // //Rx Js: Creating Observable from range
    // Observable.range(1, 5).subscribe(x => console.log(x));

    //Rx Js: Creating observable from interval
    // var ob = Observable.interval(1000);
    // ob.subscribe(x => console.log(x));
    // ob.flatMap(x => { console.log("Calling the server to get the latest news"); return Observable.of("x " + x);})
    //   .subscribe(news => console.log(news));

    //Rx Js: Fork Join operator
    // var userStream = Observable.of({userId: 1, username: 'Ramesh'}).delay(2000);
    // var tweetStream = Observable.of([1,2,3]).delay(1500);
    // Observable.forkJoin(userStream, tweetStream)
    //           .map(joined => new Object({user: joined[0], tweets: joined[1]}))
    //           .subscribe(x => console.log(x));
    //
    // //Rx Js: Handling errors
    // Observable.throw(new Error("Something went wrong"))
    // .subscribe(out => console.log(out),
    //            error => console.log(error));

    //Rx Js: Retry operator
    let counter = 0;
    Observable.of('url')
              .flatMap(() => {
                counter++;
                console.log(counter);
                if (counter < 3)
                  return Observable.throw(new Error("RequestFailed"));
                return Observable.of([2,3]);
              }).retry(2).subscribe(x => console.log(x), error => console.error(error));

    //Rx Js: Catch operator
    Observable.of(1, 2, 3)
              .catch(err => {
                  console.error("Error has occured switching to backend storage");
                  return Observable.of(['back End storage']);
              }).subscribe(x => console.log(x));

    //Rx Js: Time out operator
    Observable.of(9, 10, 11)
              .delay(5000)
              .timeout(1000)
              .subscribe(x => console.log(x), e => console.error(e), () => { console.log('done')});

    //Rx Js: Completed Notification
    Observable.throw(new Error("error")).subscribe(x => console.log(x), e => console.error(e), () => console.log('Done error'))
    Observable.from([1, 2, 3]).subscribe(x => console.log(x), e => console.error(e), () => console.log('Done error'))


  }

}
