import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public getJugadoresByEquipo(id: number): Observable<Jugador[]> {
    return this.httpClient.get<Jugador[]>(`${this.baseUrl}/jugador/equipo/${id}`);
  }
  public getJugador(id: number): Observable<Jugador> {
    return this.httpClient.get<Jugador>(`${this.baseUrl}/jugador/${id}`);
  }
  public createJugador(jugador: Jugador): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/jugador`, jugador);
  }
  public updateJugador(id: number, jugador: Jugador): Observable<Jugador> {
    return this.httpClient.put<Jugador>(`${this.baseUrl}/jugador/${id}`, jugador);
  }
  public deleteJugador(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/jugador/${id}`);
  }
}
