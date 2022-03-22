import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Argonaute } from 'src/app/admin/shared/models/argonaute.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoyaumeService {

  constructor(private http: HttpClient) { }

  public getArgonautes(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>(environment.apiUrl + 'royaume');
  }

  public getOneArgonaute(id: number): Observable<Argonaute> {
    return this.http.get<Argonaute>(environment.apiUrl + 'royaume/' + id);
  }

  public deleteArgonaute(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + 'royaume/' + id);
  }

  public postArgonaute(formData: FormGroup): Observable<Argonaute> {
    return this.http.post<Argonaute>(environment.apiUrl + 'royaume/', formData);
  }

  public updateArgonaute(formData: FormGroup, id: number): Observable<Argonaute> {
    return this.http.put<Argonaute>(environment.apiUrl + 'royaume/' + id, formData);
  }
}
