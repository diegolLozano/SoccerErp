import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liga } from '../models/liga';

@Injectable({
  providedIn: 'root'
})
export class LigaService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  public getligas(): Observable<Liga[]> {
    return this.httpClient.get<Liga[]>(`${this.baseUrl}/liga`);
  }
  public getLiga(id: number): Observable<Liga> {
    return this.httpClient.get<Liga>(`${this.baseUrl}/liga/${id}`);
  }
  public createLiga(liga: Liga): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/liga`, liga);
  }
  public updateLiga(id: number, liga: Liga): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/liga/${id}`, liga);
  }
  public deleteLiga(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/liga/${id}`);
  }
  public createTorneo(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/liga/torneo/${id}`);
  }
}
