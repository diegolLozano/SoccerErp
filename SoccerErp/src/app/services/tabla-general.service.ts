import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TablaGeneral } from '../models/tabla-general';

@Injectable({
  providedIn: 'root'
})
export class TablaGeneralService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public getTablaGeneral(ligaId: number): Observable<TablaGeneral[]> {
    return this.httpClient.get<TablaGeneral[]>(`${this.baseUrl}/tablageneral/${ligaId}`);
  }
  public getTablaGeneralPdf(ligaId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tablageneral/pdf/${ligaId}`, { responseType: 'blob' });
  }
}
