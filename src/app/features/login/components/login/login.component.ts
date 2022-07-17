import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';
import { cargarSesion, loginAction } from '../../store/login-feature.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, private authService: AuthService, private ruta: Router, private store: Store) {
      this.loginForm = fb.group({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  submit(event: Event) {
    event.preventDefault();
    const user = this.loginForm.value.user;
    const pass = this.loginForm.value.pass;
    this.authService.IniciarSesion(user, pass).subscribe((data: Usuarios) => {
        if (data) {
          this.store.dispatch(cargarSesion({ data }));
          this.authService.establecerSesion(true, data);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error de credenciales',
            confirmButtonColor: '#0D47A1',
          });
        }
      });
    this.store.dispatch(
    loginAction({ user: user, pass: pass })
    );
  }
}
