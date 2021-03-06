import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url = 'https://backclinicafisi.herokuapp.com/api/rol/';
  
  constructor(private http: HttpClient) { }

  guardarRol(rol: Rol): Observable<any> {
    return this.http.post(this.url, rol);
  }

  obtenerRoles(): Observable<any> {
    return this.http.get(this.url);
  }

  obtenerRol(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  eliminarRol(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }


}