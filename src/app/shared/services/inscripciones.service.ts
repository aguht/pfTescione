import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripciones } from '../interfaces/inscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/inscripciones';
  constructor(private http: HttpClient) { }

  getInscripcionesList():Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(this.url);
  }

  postInscripciones(inscripciones:Inscripciones):Observable<Inscripciones>{
    return this.http.post<Inscripciones>(this.url,inscripciones);
  }

  updateInscripciones(inscripciones:Inscripciones):Observable<Inscripciones>{
    return this.http.put<Inscripciones>(this.url+`/${inscripciones.id}`,inscripciones);
  }

  deleteInscripciones(id:string):Observable<Inscripciones>{
    return this.http.delete<Inscripciones>(this.url+`/${id}`);
  }

  getInscripcionesDetail(id:string):Observable<Inscripciones>{
    return this.http.get<Inscripciones>(this.url+`/${id}`);
  }
}