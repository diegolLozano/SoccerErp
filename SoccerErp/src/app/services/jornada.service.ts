import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jornada } from '../models/jornada';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  public getJornadas(): Observable<Jornada[]> {
    return this.httpClient.get<Jornada[]>(`${this.baseUrl}/jornada`);
  }
  public getJornadasByLiga(idLiga: number): Observable<Jornada[]> {
    return this.httpClient.get<Jornada[]>(`${this.baseUrl}/jornada/liga/${idLiga}`);
  }
  public getJornadasByEquipo(idEquipo: number): Observable<Jornada[]> {
    return this.httpClient.get<Jornada[]>(`${this.baseUrl}/jornada/equipo/${idEquipo}`);
  }
  public getJornada(id: number): Observable<Jornada> {
    return this.httpClient.get<Jornada>(`${this.baseUrl}/jornada/${id}`);
  }
}
