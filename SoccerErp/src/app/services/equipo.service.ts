import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getEquipos(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/equipo`);
  }
  public getEquiposByLiga(idLiga: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/equipo/liga/${idLiga}`);
  }
  public getEquipo(id: number): Observable<Equipo> {
    return this.httpClient.get<Equipo>(`${this.baseUrl}/equipo/${id}`);
  }
  public createEquipo(equipo: Equipo): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/equipo`, equipo);
  }
  public updateEquipo(id: number, equipo: Equipo): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/equipo/${id}`, equipo);
  }
  public deleteEquipo(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/equipo/${id}`);
  }
}
