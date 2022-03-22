import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Background} from 'src/app/admin/shared/models/background.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getBackground(): Observable<Background[]> {
    return this.http.get<Background[]>(environment.apiUrl + 'background');
  }

  public updateBackground(id: number, formData: FormGroup) {
    return this.http.put<Background>(environment.apiUrl + 'background/' + id, formData);
  }

  public createBackground<Background>(formData: FormGroup) {
    return this.http.post<Background>(environment.apiUrl + 'background', formData);
  }
}
