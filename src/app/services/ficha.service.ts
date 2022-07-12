import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficha } from '../models/ficha';

@Injectable({
  providedIn: 'root'
})
export class FichaService {
  url = 'http://localhost:4000/api/ficha/';
  
  constructor(private http: HttpClient) { }

  guardarFicha(ficha: Ficha): Observable<any> {
    return this.http.post(this.url, ficha);
  }

  obtenerFicha(id:string): Observable<any> {
    return this.http.get(this.url+id);
  }
}
