import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from './../models/user.model';


@Injectable()
export class UserService {

  // getLoggedUser(): User{
  //   const loggedUser = new User();
  //   loggedUser.id = 1;
  //   loggedUser.name = 'Afonsinho';
  //   loggedUser.username = 'afonsinho';

  //   return loggedUser;
  // }

  getLoggedUser(): Observable<User>{
    const loggedUser = new User();
    loggedUser.id = 1;
    loggedUser.name = 'Afonsinho';
    loggedUser.username = 'afonsinho';

    const loggedUserObservable = new Observable(
      (observer: Observer<User>) => {
        observer.next(loggedUser);
        observer.complete();
      }
    );

    return loggedUserObservable;
  }

}
