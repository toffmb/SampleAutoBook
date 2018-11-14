import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    setTimeout(() => { this.init(); }, 150);
    // setTimeout(() => { this.dev(); }, 150);
  }

  init() {
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['startup'], {
        relativeTo: this.route,
        skipLocationChange: true,
        replaceUrl: false
      });
    });
  }

  dev() {
    this.router.navigate(['/']).then(() => {
      this.router.navigate(['startup', 'login'], {
        // this.router.navigate(['startup', 'signup'], {
          relativeTo: this.route,
          skipLocationChange: true,
          replaceUrl: false
        });
    });
  }

}
