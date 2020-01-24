import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  public login(login: Login): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, login);
  }
}
