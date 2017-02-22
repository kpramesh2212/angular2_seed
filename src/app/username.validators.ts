import { FormControl } from '@angular/forms';
export class UsernameValidators {

  static containsSpace(fc: FormControl) {
    if (fc.value.indexOf(' ') >= 0)
      return {"containsSpace": true};
    return null;
  }

  static unique(fc: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> { if (fc.value == 'ramesh') resolve({notUnique: true}); return resolve(null);}, 3000);
    });
  }
}
