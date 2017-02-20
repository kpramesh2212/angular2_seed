import { Component } from '@angular/core';


@Component({
  selector: 'contact-form',
  templateUrl: './app/contact-form.component.html'
})
export class ContactFormComponent {

  whenChanged(f: Object) {
    console.log(f);
  }

}
