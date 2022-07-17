import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { cerrarSesion } from 'src/app/features/login/store/login-feature.actions';
import { selectorUsuarioActivo } from 'src/app/features/login/store/login-feature.selectors';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioActivo: Usuarios;
  vista:any;

  constructor(public authService:AuthService, private store:Store, private router:Router, private alumnosService:AlumnosService) { }

  ngOnInit(): void {
    let aux = JSON.parse(localStorage.getItem('sesion') || 'false');
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      if (aux.usuario !== undefined) {
        this.usuarioActivo = aux.usuario;
      } else {
        this.usuarioActivo = data.usuarioActivo;
      }
    });
  }

  cerrarSesion() {
    this.authService.logOut();
    this.store.dispatch(cerrarSesion());
    this.router.navigate(['login']);
  }

}
