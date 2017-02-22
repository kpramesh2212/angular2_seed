import { FormGroup } from '@angular/forms';

export class PasswordValidators {

  static newPasswordMatchConfirmPassword(fg: FormGroup) {
    let np = fg.controls['np'].value;
    let cp = fg.controls['cnfp'].value;

    if (cp == '' || np === cp) {
      return null;
    }
    return {notMatches: true};
  }

}
