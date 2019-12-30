import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  public getPartidos(): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(`${this.baseUrl}/partido`);
  }
  public getPartidosByJornada(idJornada: number): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(`${this.baseUrl}/partido/jornada/${idJornada}`);
  }
  public getPartidosByequipo(idEquipo: number): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(`${this.baseUrl}/partido/equipo/${idEquipo}`);
  }
  public getPartido(id: number): Observable<Partido> {
    return this.httpClient.get(`${this.baseUrl}/partido/${id}`);
  }
}
