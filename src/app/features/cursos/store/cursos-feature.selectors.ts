import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosFeature from './cursos-feature.reducer';

export const selectCursosFeatureState = createFeatureSelector<fromCursosFeature.State>(
  fromCursosFeature.cursosFeatureFeatureKey
);

export const selectCursos=createSelector(
  selectCursosFeatureState,
  (state)=>state.cursos
)

export const selectLoading=createSelector(
  selectCursosFeatureState,
  (state)=>state.loading
)

export const selectCursosSuccess=createSelector(
  selectCursos,
  selectLoading,
  (cursos,loading)=>({cursos,loading})
)

export const selectCursoByIdSuccess=createSelector(
  selectCursosFeatureState,
  (state)=>state.cursosDetailed
)
