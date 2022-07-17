import { createAction, props } from '@ngrx/store';
import { Alumnos } from 'src/app/shared/interfaces/alumnos';

export const loadAlumnosFeatures = createAction(
  '[AlumnosFeature] Load AlumnosFeatures'
);

export const loadAlumnosFeaturesSuccess = createAction(
  '[AlumnosFeature] Load AlumnosFeatures Success',
  props<{ alumnos: Alumnos[] }>()
);

export const loadAlumnosFeaturesFailure = createAction(
  '[AlumnosFeature] Load AlumnosFeatures Failure',
  props<{ error: any }>()
);

export const postAlumnosFeatures=createAction(
  '[AlumnosFeature] post Alumnos',
  props<{alumnos:Alumnos}>()
);

export const deleteAlumnosFeatures=createAction(
  '[AlumnosFeature] delete Alumnos',
  props<{id:string}>()
);

export const loadAlumnoByIdFeatures=createAction(
  '[AlumnosFeature] load element by id feature',
  props<{id:string}>()
);

export const loadAlumnoByIdFeaturesSucces=createAction(
  '[AlumnosFeature] load element by id success',
  props<{alumnosDetailed:Alumnos}>()
);

export const updateAlumnosFeatures=createAction(
  '[AlumnosFeature] update Alumnos',
  props<{alumnos:Alumnos}>()
);
