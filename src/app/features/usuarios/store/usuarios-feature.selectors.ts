import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuariosFeature from './usuarios-feature.reducer';

export const selectUsuariosFeatureState = createFeatureSelector<fromUsuariosFeature.State>(
  fromUsuariosFeature.usuariosFeatureFeatureKey
);

export const selectUsuarios=createSelector(
  selectUsuariosFeatureState,
  (state)=>state.usuarios
)

export const selectLoading=createSelector(
  selectUsuariosFeatureState,
  (state)=>state.loading
)

export const selectUsuariosSuccess=createSelector(
  selectUsuarios,
  selectLoading,
  (usuarios,loading)=>({usuarios,loading})
)

export const selectUsuarioByIdSuccess=createSelector(
  selectUsuariosFeatureState,
  (state)=>state.usuariosDetailed
)