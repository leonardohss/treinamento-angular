import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

import { APP_NAME } from './../../app.const';
import { User } from 'src/app/models/user.model';
import { Globals } from 'src/app/app.globals';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit{

  loggedUser: User;
  isLoggedUser = false;
  appName = APP_NAME;

  constructor(
    private userService: UserService,
    public globals: Globals,
    private authenticationService: AuthenticationService,
    private ngxSpinnerService: NgxSpinnerService
  ){ }

  ngOnInit(){
    this.userService.getById(10)
     .subscribe(
       (returnedUser: User) => this.loggedUser = returnedUser,
       (error: Error) => console.error(error),
       () => {
         this.ngxSpinnerService.hide();
         console.log('Complete');
        }
     );
     this.subscribes();
  }

  onLogoff(){
    this.authenticationService.signOut();
  }

  private subscribes(){
    this.userService.isLoggedUserEmitter
    .subscribe(
      isLoggedUser => this.isLoggedUser = isLoggedUser
    );
  }
}
