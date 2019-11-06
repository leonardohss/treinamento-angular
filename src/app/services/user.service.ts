import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.const';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class UserService {

  isLoggedUserEmitter = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ){  }

  getById(id: number): Observable<User>{
    this.ngxSpinnerService.show();
    return this.httpClient.get<User>(`${API_URL}/users/${id}`);
  }

  // getLoggedUser(): User{
  //   const loggedUser = new User();
  //   loggedUser.id = 1;
  //   loggedUser.name = 'Afonsinho';
  //   loggedUser.username = 'afonsinho';

  //   return loggedUser;
  // }

 /* getLoggedUser(): Observable<User>{
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
  }*/

}
