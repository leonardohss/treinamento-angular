import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

import { APP_NAME } from './../../app.const';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit{

  loggedUser: User;
  appName = APP_NAME;

  constructor(private userService: UserService){ }

  ngOnInit(){
    this.userService.getLoggedUser()
     .subscribe(
       (returnedUser: User) => this.loggedUser = returnedUser,
       (error: Error) => console.error(error),
       () => console.log('Complete')
     );
  }
}
