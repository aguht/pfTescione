import { createAction, props } from '@ngrx/store';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';

export const loadInscripcionesFeatures = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures'
);

export const loadInscripcionesFeaturesSuccess = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures Success',
  props<{inscripciones:Inscripciones[]}>()
);

export const loadInscripcionesFeaturesFailure = createAction(
  '[InscripcionesFeature] Load InscripcionesFeatures Failure',
  props<{ error: any }>()
);

export const postInscripcionesFeatures=createAction(
  '[InscripcionesFeature] post Inscripciones',
  props<{inscripciones:Inscripciones}>()
);

export const deleteInscripcionesFeatures=createAction(
  '[InscripcionesFeature] delete Inscripciones',
  props<{id:string}>()
);

export const loadInscripcionByIdFeatures=createAction(
  '[InscripcionesFeature] load Inscripcion by id feature',
  props<{id:string}>()
);

export const loadInscripcionByIdFeaturesSucces=createAction(
  '[InscripcionesFeature] load Inscripcion by id success',
  props<{inscripcionesDetailed:Inscripciones}>()
);

export const updateInscripcionesFeatures=createAction(
  '[InscripcionesFeature] update Inscripciones',
  props<{inscripciones:Inscripciones}>()
);