import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { LoginComponent } from '../../page/login/login.component';


@Injectable()
export class ConfirmDeactivateGuardService implements CanDeactivate<LoginComponent> {
  constructor(
    private router: Router,
  ) { }

  canDeactivate() {
    if (!JSON.parse(localStorage.getItem('userInfo'))) {
      return true;
    }
    return false;
  }

}
