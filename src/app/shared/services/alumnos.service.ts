import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/alumnos';
  constructor(private http: HttpClient) { }

  getAlumnosList():Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(this.url);
  }

  postAlumnos(alumnos:any):Observable<Alumnos>{
    return this.http.post<Alumnos>(this.url,alumnos)
  }

  updateAlumnos(alumnos:Alumnos):Observable<Alumnos>{
    return this.http.put<Alumnos>(this.url+`/${alumnos.id}`,alumnos)
  }

  deleteAlumnos(id:string):Observable<Alumnos>{
    return this.http.delete<Alumnos>(this.url+`/${id}`);
  }

  getAlumnosDetail(id:string):Observable<Alumnos>{
    return this.http.get<Alumnos>(this.url+`/${id}`);
  } 
}
