import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) {}

  public proceedLogin(formData: FormGroup) {
    return this.http.post(environment.apiUrl + 'auth/signin', formData);
  }

  public storeUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserToken() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.accessToken;
    }
  }

  public getUserId() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.id;
    }
  }

  public isAdmin() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.roles.includes('ROLE_ADMIN');
    }
  }

  public isLoggedIn() {
    return localStorage.getItem('user') != null;
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

  public isTokenExpired(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'auth/istokenexpired');
  }

  public getUsername() {
    const user = localStorage.getItem('user');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user.username;
    }
  }
}