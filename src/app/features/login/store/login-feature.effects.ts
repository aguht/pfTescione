import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { loginAction } from './login-feature.actions';

@Injectable()
export class AuthEffects {
  iniciarSesionEffect = this.actions$.pipe(
    ofType(loginAction),
    switchMap((action) =>
      this.authService.IniciarSesion(action.user, action.pass)
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
