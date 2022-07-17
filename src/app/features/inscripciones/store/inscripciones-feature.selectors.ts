import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcionesFeature from './inscripciones-feature.reducer';

export const selectInscripcionesFeatureState = createFeatureSelector<fromInscripcionesFeature.State>(
  fromInscripcionesFeature.inscripcionesFeatureFeatureKey
);

export const selectInscripciones=createSelector(
  selectInscripcionesFeatureState,
  (state)=>state.inscripciones
)

export const selectLoading=createSelector(
  selectInscripcionesFeatureState,
  (state)=>state.loading
)

export const selectInscripcionesSuccess=createSelector(
  selectInscripciones,
  selectLoading,
  (inscripciones,loading)=>({inscripciones,loading})
)

export const selectInscripcionByIdSuccess=createSelector(
  selectInscripcionesFeatureState,
  (state)=>state.inscripcionesDetailed
)