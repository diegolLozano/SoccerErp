import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../models/partido';
import { Jugador } from '../models/jugador';

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
    return this.httpClient.get<Partido[]>(
      `${this.baseUrl}/partido/jornada/${idJornada}`
    );
  }
  public getPartidosByequipo(idEquipo: number): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(
      `${this.baseUrl}/partido/equipo/${idEquipo}`
    );
  }
  public getPartido(id: number): Observable<Partido> {
    return this.httpClient.get(`${this.baseUrl}/partido/${id}`);
  }
  public getJugadoresByPartido(id: number): Observable<Jugador[]> {
    return this.httpClient.get<Jugador[]>(`${this.baseUrl}/partido/${id}/jugador`);
  }
  public createPartido(partido: Partido): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/partido`, partido);
  }
  public updatePartido(id: number, partido: Partido): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/partido/${id}`, partido);
  }
  public deletePartido(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/partido/${id}`);
  }
}
