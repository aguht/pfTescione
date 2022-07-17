import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    sesion: any = {
    activa: false,
    usuario: {},
  };
  
  url= 'https://62c7460574e1381c0a74d0a5.mockapi.io/usuarios';
  rol: any;

  isAuthenticatedSrc: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('sesion') || 'false')
  );

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSrc.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    return this.rol;
  }

  constructor(private http: HttpClient, private router: Router) {

    let val = JSON.parse(localStorage.getItem('sesion') || 'false');
    if (val.user !== undefined) {
      if (val.user.rol === 1) {
        this.rol = true;
        } else {
          this.rol = false;
          }
      } else {
        this.rol = false;
        }
  }

  IniciarSesion(user: string, pass: string): Observable<Usuarios> {
    return this.http.get<Usuarios[]>(this.url)
      .pipe(
        map((usuarios: Usuarios[]) => {
          return usuarios.filter((u) => u.user === user && u.pass === pass)[0];
        })
      )
      .pipe(
        tap((xx:any) => {
          if (xx) {
            this.isAuthenticatedSrc.next(true);
            if (xx.rol == 1) {
              this.rol = true;
            } else {
              this.rol = false;
            }
          }
        })
      );
  }

  
  logOut(): void {
    this.sesion = {
      activa: false,
      usuario: {},
    };
    localStorage.removeItem('sesion');
    this.isAuthenticatedSrc.next(false);
    this.router.navigate(['login']);
  }

  establecerSesion(sesionActiva: boolean, user: Usuarios) {
    this.sesion = {
      activa: sesionActiva,
      usuario: user,
    };
    localStorage.setItem('session', JSON.stringify(this.sesion));
    this.router.navigate(['/alumnos']);
  }

}
