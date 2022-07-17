import { createAction, props } from '@ngrx/store';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';

export const loginAction = createAction(
  '[Auth] Iniciar Sesion',
  props<{ user: any; pass: any }>()
);

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{ data: Usuarios }>()
);

export const cerrarSesion = createAction('[Auth] Cerrar Sesion');
