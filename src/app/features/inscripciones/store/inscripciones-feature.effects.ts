import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as InscripcionesFeatureActions from './inscripciones-feature.actions';
import { InscripcionesService } from 'src/app/shared/services/inscripciones.service';


@Injectable()
export class InscripcionesFeatureEffects {

  loadInscripcionesFeatures$=createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesFeatureActions.loadInscripcionesFeatures),
      mergeMap(()=>this.inscripcionesService.getInscripcionesList()
      .pipe(
        map(inscripciones=>InscripcionesFeatureActions.loadInscripcionesFeaturesSuccess({inscripciones})),
        catchError(()=>EMPTY)
      ))
    );
  });
  
  postInscripcionesFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(InscripcionesFeatureActions.postInscripcionesFeatures),
      mergeMap((inscripciones)=>this.inscripcionesService.postInscripciones(inscripciones.inscripciones)
      .pipe(
        map(()=>InscripcionesFeatureActions.loadInscripcionesFeatures()),
        catchError(()=>EMPTY)
      ))
    );
  });

  deleteInscripcionesFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(InscripcionesFeatureActions.deleteInscripcionesFeatures),
      mergeMap((inscripciones)=>this.inscripcionesService.deleteInscripciones(inscripciones.id)
      .pipe(
        map(()=>InscripcionesFeatureActions.loadInscripcionesFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });

  loadInscripcionesDetailedFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(InscripcionesFeatureActions.loadInscripcionByIdFeatures),
      mergeMap((inscripciones)=>this.inscripcionesService.getInscripcionesDetail(inscripciones.id)
      .pipe(
        map((inscripcionesDetailed)=>InscripcionesFeatureActions.loadInscripcionByIdFeaturesSucces({inscripcionesDetailed})),
        catchError(()=>EMPTY)
     ))
    );
  });

  updateInscripcionesFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(InscripcionesFeatureActions.updateInscripcionesFeatures),
      mergeMap((inscripciones)=>this.inscripcionesService.updateInscripciones(inscripciones.inscripciones)
      .pipe(
        map(()=>InscripcionesFeatureActions.loadInscripcionesFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });


  constructor(private actions$: Actions, private inscripcionesService:InscripcionesService) {}
}