import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discapacidad } from '../models/discapacidad';

@Injectable({
  providedIn: 'root'
})
export class DiscapacidadService {
  url = 'https://backclinicafisi.herokuapp.com/api/discapacidad/';
  
  constructor(private http: HttpClient) { }

  guardarD(d: Discapacidad): Observable<any> {
    return this.http.post(this.url, d);
  }

  obtenerDs(): Observable<any> {
    return this.http.get(this.url);
  }

  obtenerD(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  eliminarD(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }


}