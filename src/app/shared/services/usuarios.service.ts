import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/usuarios';
  constructor(private http: HttpClient) { }

  getUsuariosList():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.url);
  }

  postUsuarios(usuarios:any):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.url,usuarios)
  }

  updateUsuarios(usuarios:Usuarios):Observable<Usuarios>{
    return this.http.put<Usuarios>(this.url+`/${usuarios.id}`,usuarios)
  }

  deleteUsuarios(id:string):Observable<Usuarios>{
    return this.http.delete<Usuarios>(this.url+`/${id}`);
  }

  getUsuariosDetail(id:string):Observable<Usuarios>{
    return this.http.get<Usuarios>(this.url+`/${id}`);
  }
}
