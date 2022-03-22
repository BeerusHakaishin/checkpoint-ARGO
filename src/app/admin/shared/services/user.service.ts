import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl  + 'users');
  }

  public getUserById(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + 'users/{id}');
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + 'users/' + id);
  }

  public postUser(formData: FormGroup): Observable<User> {
    return this.http.post<User>(environment.apiUrl + 'auth/signup', formData);
  }
}
