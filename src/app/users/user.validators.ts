import {FormControl} from "@angular/forms";
export class UserValidators {

  static validEmail(fc: FormControl) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fc.value =='' || emailRegex.test(fc.value)) {
      return null;
    }
    return {'validEmail': 'false'};
  }

}
