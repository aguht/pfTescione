import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/cursos';
  constructor(private http: HttpClient) { }

  getCursosList():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.url);
  }

  postCursos(cursos:any):Observable<Cursos>{
    return this.http.post<Cursos>(this.url,cursos)
  }

  updateCursos(cursos:Cursos):Observable<Cursos>{
    return this.http.put<Cursos>(this.url+`/${cursos.id}`,cursos)
  }

  deleteCursos(id:string):Observable<Cursos>{
    return this.http.delete<Cursos>(this.url+`/${id}`);
  }

  getCursosDetail(id:string):Observable<Cursos>{
    return this.http.get<Cursos>(this.url+`/${id}`);
  }
}