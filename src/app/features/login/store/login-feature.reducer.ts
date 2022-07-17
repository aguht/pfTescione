import { Action, createReducer, on } from '@ngrx/store';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';
import * as AuthActions from './login-feature.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  usuarioActivo: Usuarios;
}

export const initialState: AuthState = {
  usuarioActivo: {
    id: '',
    user: '',
    pass: '',
    rol: 0,
  },
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.cargarSesion, (state, { data }) => {
    return { ...state, usuarioActivo: data };
  }),

  on(AuthActions.loginAction, (state, { user, pass }) => {
    return { ...state, user };
  }),

  on(AuthActions.cerrarSesion, () => {
    return initialState;
  })
);
