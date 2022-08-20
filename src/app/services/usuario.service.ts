import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://localhost:4000/api/usuario/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  obtenerUsuario(id: any): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarUsuario(id: string, usuario:Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }
}
