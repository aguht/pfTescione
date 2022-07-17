import { createAction, props } from '@ngrx/store';
import { Cursos } from 'src/app/shared/interfaces/cursos';

export const loadCursosFeatures = createAction(
  '[CursosFeature] Load CursosFeatures'
);

export const loadCursosFeaturesSuccess = createAction(
  '[CursosFeature] Load CursosFeatures Success',
  props<{ cursos: Cursos[] }>()
);

export const loadCursosFeaturesFailure = createAction(
  '[CursosFeature] Load CursosFeatures Failure',
  props<{ error: any }>()
);

export const postCursosFeatures=createAction(
  '[CursosFeature] post Cursos',
  props<{cursos:Cursos}>()
);

export const deleteCursosFeatures=createAction(
  '[CursosFeature] delete Cursos',
  props<{id:string}>()
);

export const loadCursoByIdFeatures=createAction(
  '[CursosFeature] load element by id feature',
  props<{id:string}>()
);

export const loadCursoByIdFeaturesSucces=createAction(
  '[CursosFeature] load element by id success',
  props<{cursosDetailed:Cursos}>()
);

export const updateCursosFeatures=createAction(
  '[CursosFeature] update Cursos',
  props<{cursos:Cursos}>()
);