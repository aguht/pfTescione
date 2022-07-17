import { Action, createReducer, on } from '@ngrx/store';
import { Usuarios } from 'src/app/shared/interfaces/usuarios';
import * as UsuariosFeatureActions from './usuarios-feature.actions';

export const usuariosFeatureFeatureKey = 'usuariosFeature';

export interface State {
  usuarios: Usuarios[];
  loading: boolean;
  usuariosDetailed: any;
};

export const initialState: State = {
  usuarios: [],
  loading: true,
  usuariosDetailed: {}
};

export const reducer = createReducer(
  initialState,

  on(UsuariosFeatureActions.loadUsuariosFeatures, (state) => {
    return {...state}
  }),
  on(UsuariosFeatureActions.loadUsuariosFeaturesSuccess, (state, {usuarios}) => {
    return {...state, usuarios, loading:false}
  }),
  on(UsuariosFeatureActions.loadUsuariosFeaturesFailure, (state, action) => state),

  on(UsuariosFeatureActions.loadUsuarioByIdFeaturesSucces, (state,{usuariosDetailed})=>{
    return {...state,usuariosDetailed}
  }),

);