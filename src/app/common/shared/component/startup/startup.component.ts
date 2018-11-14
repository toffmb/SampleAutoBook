import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    
  }

}
