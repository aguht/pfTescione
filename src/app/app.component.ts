import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAlumnosFeatures } from './features/alumnos/store/alumnos-feature.actions';
import { selectorUsuarioActivo } from './features/login/store/login-feature.selectors';
import { Usuarios } from './shared/interfaces/usuarios';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'entrega9pf';
  other_content: boolean = false;
  usuarioActivo!: Usuarios;

  constructor(public authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      this.usuarioActivo = data.usuarioActivo;
    });
  }
}