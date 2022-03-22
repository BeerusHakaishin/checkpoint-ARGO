import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Background} from 'src/app/admin/shared/models/background.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getBackground(): Observable<Background[]> {
    return this.http.get<Background[]>(environment.apiUrl + 'background');
  }

  public updateBackground(id: number, data: any) {
    return this.http.put<Background>(environment.apiUrl + 'background/' + id, data);
  }

  public createBackground<Background>(data: any) {
    return this.http.post<Background>(environment.apiUrl + 'background', data);
  }
}
