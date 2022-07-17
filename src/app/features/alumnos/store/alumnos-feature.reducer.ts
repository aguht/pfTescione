import { Action, createReducer, on } from '@ngrx/store';
import { Alumnos } from 'src/app/shared/interfaces/alumnos';
import * as AlumnosFeatureActions from './alumnos-feature.actions';

export const alumnosFeatureFeatureKey = 'alumnosFeature';

export interface State {
  alumnos: Alumnos[];
  loading: boolean;
  alumnosDetailed: any;
};

export const initialState: State = {
  alumnos: [],
  loading: true,
  alumnosDetailed: {}
};

export const reducer = createReducer(
  initialState,

  on(AlumnosFeatureActions.loadAlumnosFeatures, (state) => {
    return {...state}
  }),
  on(AlumnosFeatureActions.loadAlumnosFeaturesSuccess, (state, {alumnos}) => {
    return {...state, alumnos, loading:false}
  }),
  on(AlumnosFeatureActions.loadAlumnosFeaturesFailure, (state, action) => state),

  on(AlumnosFeatureActions.loadAlumnoByIdFeaturesSucces, (state,{alumnosDetailed})=>{
    return {...state,alumnosDetailed}
  }),

);
