import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnosFeature from './alumnos-feature.reducer';

export const selectAlumnosFeatureState = createFeatureSelector<fromAlumnosFeature.State>(
  fromAlumnosFeature.alumnosFeatureFeatureKey
);

export const selectAlumnos=createSelector(
  selectAlumnosFeatureState,
  (state)=>state.alumnos
)

export const selectLoading=createSelector(
  selectAlumnosFeatureState,
  (state)=>state.loading
)

export const selectAlumnosSuccess=createSelector(
  selectAlumnos,
  selectLoading,
  (alumnos,loading)=>({alumnos,loading})
)

export const selectAlumnoByIdSuccess=createSelector(
  selectAlumnosFeatureState,
  (state)=>state.alumnosDetailed
)
