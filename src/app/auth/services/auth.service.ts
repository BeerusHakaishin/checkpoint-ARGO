import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import { User } from 'src/app/admin/shared/models/user.model';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) {}

  public proceedLogin(formData: FormGroup) {
    return this.http.post(environment.apiUrl + 'auth/signin', formData);
  }

  public storeUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserToken() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.accessToken;
    } else {
      return null;
    }
  }

  public isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  public getUserId() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.id;
    } else {
      return null;
    }
  }

  public logOut(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'auth/logout');
  }

  public removeUser() {
    localStorage.removeItem('user');
  }

  public emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  public getUsername() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.username;
    } else {
      return null;
    }
  }
}