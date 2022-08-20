import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficha } from '../models/ficha';
import { Incidencia } from '../models/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  url = 'https://localhost:4000/api/incidencia/';
  
  constructor(private http: HttpClient) { }

  guardarIncidencia(incidencia: Incidencia): Observable<any> {
    return this.http.post(this.url, incidencia);
  }

  obtenerIncidencia(id:string): Observable<any> {
    return this.http.get(this.url+id);
  }
}
