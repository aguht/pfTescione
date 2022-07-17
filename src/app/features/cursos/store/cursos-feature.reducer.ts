import { Action, createReducer, on } from '@ngrx/store';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import * as CursosFeatureActions from './cursos-feature.actions';

export const cursosFeatureFeatureKey = 'cursosFeature';

export interface State {
  cursos: Cursos[];
  loading: boolean;
  cursosDetailed: any;
};

export const initialState: State = {
  cursos: [],
  loading: true,
  cursosDetailed: {}
};

export const reducer = createReducer(
  initialState,

  on(CursosFeatureActions.loadCursosFeatures, (state) => {
    return {...state}
  }),
  on(CursosFeatureActions.loadCursosFeaturesSuccess, (state, {cursos}) => {
    return {...state, cursos, loading:false}
  }),
  on(CursosFeatureActions.loadCursosFeaturesFailure, (state, action) => state),

  on(CursosFeatureActions.loadCursoByIdFeaturesSucces, (state,{cursosDetailed})=>{
    return {...state,cursosDetailed}
  }),

);
