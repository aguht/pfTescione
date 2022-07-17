import { Action, createReducer, on } from '@ngrx/store';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import * as InscripcionesFeatureActions from './inscripciones-feature.actions';

export const inscripcionesFeatureFeatureKey = 'inscripcionesFeature';

export interface State {
  inscripciones: Inscripciones[];
  loading: boolean;
  inscripcionesDetailed: any;
};

export const initialState: State = {
  inscripciones: [],
  loading: true,
  inscripcionesDetailed: {}
};

export const reducer = createReducer(
  initialState,

  on(InscripcionesFeatureActions.loadInscripcionesFeatures, (state) => {
    return {...state}
  }),
  on(InscripcionesFeatureActions.loadInscripcionesFeaturesSuccess, (state, {inscripciones}) => {
    return {...state, inscripciones, loading:false}
  }),
  on(InscripcionesFeatureActions.loadInscripcionesFeaturesFailure, (state, action) => state),

  on(InscripcionesFeatureActions.loadInscripcionByIdFeaturesSucces, (state,{inscripcionesDetailed})=>{
    return {...state,inscripcionesDetailed}
  }),

);