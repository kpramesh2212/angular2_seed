import { Component } from '@angular/core';

@Component({
  selector: 'subscription-form',
  templateUrl: './app/subscription-form.component.html'
})
export class SubscriptionFormComponent {
  whenChanged(name: Object) {
    console.log(name);
  }
}
