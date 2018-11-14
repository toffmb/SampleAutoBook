import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { SharedService } from './shared.service';

import { User, Social, AuthError } from '../../shared/interface/fireAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  state: any;

  constructor(
    private zone: NgZone,
    private router: Router,
    private fire: AngularFireAuth,
    private shared: SharedService
  ) {
    fire.authState.subscribe((res: any) => {
      this.state = res;
      console.log(this.state);
    });
  }

  signUp(user: User) {
    this.signOut().then(() => {
      this.fire.auth.createUserWithEmailAndPassword(user.email, user.password).then((res: any) => {
        console.log(res);
        this.toHome();
      }).catch((e: AuthError) => {
        this.shared.openSnack('message', e.message);
      });
    });
  }

  signIn(user: User) {
    this.signOut().then(() => {
      this.fire.auth.signInWithEmailAndPassword(user.email, user.password).then((res: any) => {
        console.log(res);
        this.toHome();
      }).catch((e: AuthError) => {
        this.shared.openSnack('message', e.message);
      });
    });
  }

  signInSocial(option: string) {
    this.signOut().then(() => {
      this.fire.auth.signInWithPopup(Social()[option]).then((res: any) => {
        console.log(res);
        this.toHome();
      }).catch((e: AuthError) => {
        this.shared.openSnack('message', e.message);
      });
    });
  }

  signOut(): any {
    this.shared.setLoading = true;
    return this.fire.auth.signOut().catch((e: AuthError) => {
      this.shared.openSnack('message', e.message);
    });
  }

  private toHome() {
    this.shared.setLoading = false;
    this.zone.run(() => {
      this.router.navigate([ '/', 'home' ]);
    })
  }

}
