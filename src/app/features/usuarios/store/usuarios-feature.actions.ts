import { createAction, props } from '@ngrx/store';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';

export const loadUsuariosFeatures = createAction(
  '[UsuariosFeature] Load UsuariosFeatures'
);

export const loadUsuariosFeaturesSuccess = createAction(
  '[UsuariosFeature] Load UsuariosFeatures Success',
  props<{usuarios:Usuarios[]}>()
);

export const loadUsuariosFeaturesFailure = createAction(
  '[UsuariosFeature] Load UsuariosFeatures Failure',
  props<{ error: any }>()
);

export const postUsuariosFeatures=createAction(
  '[UsuariosFeature] post Usuarios',
  props<{usuarios:Usuarios}>()
);

export const deleteUsuariosFeatures=createAction(
  '[UsuariosFeature] delete Usuarios',
  props<{id:string}>()
);

export const loadUsuarioByIdFeatures=createAction(
  '[UsuariosFeature] load Usuario by id feature',
  props<{id:string}>()
);

export const loadUsuarioByIdFeaturesSucces=createAction(
  '[UsuariosFeature] load Usuario by id success',
  props<{usuariosDetailed:Usuarios}>()
);

export const updateUsuariosFeatures=createAction(
  '[UsuariosFeature] update Usuarios',
  props<{usuarios:Usuarios}>()
);