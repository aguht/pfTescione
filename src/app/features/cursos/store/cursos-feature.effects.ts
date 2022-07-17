import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CursosFeatureActions from './cursos-feature.actions';
import { CursosService } from 'src/app/shared/services/cursos.service';


@Injectable()
export class CursosFeatureEffects {

  loadcursosFeatures$=createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosFeatureActions.loadCursosFeatures),
      mergeMap(()=>this.cursosService.getCursosList()
      .pipe(
        map(cursos=>CursosFeatureActions.loadCursosFeaturesSuccess({cursos})),
        catchError(()=>EMPTY)
      ))
    );
  });
  
  postCursosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosFeatureActions.postCursosFeatures),
      mergeMap((cursos)=>this.cursosService.postCursos(cursos.cursos)
      .pipe(
        map(()=>CursosFeatureActions.loadCursosFeatures()),
        catchError(()=>EMPTY)
      ))
    );
  });

  deleteCursosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosFeatureActions.deleteCursosFeatures),
      mergeMap((cursos)=>this.cursosService.deleteCursos(cursos.id)
      .pipe(
        map(()=>CursosFeatureActions.loadCursosFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });

  loadCursosDetailedFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosFeatureActions.loadCursoByIdFeatures),
      mergeMap((cursos)=>this.cursosService.getCursosDetail(cursos.id)
      .pipe(
        map((cursosDetailed)=>CursosFeatureActions.loadCursoByIdFeaturesSucces({cursosDetailed})),
        catchError(()=>EMPTY)
     ))
    );
  });

  updateCursosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosFeatureActions.updateCursosFeatures),
      mergeMap((cursos)=>this.cursosService.updateCursos(cursos.cursos)
      .pipe(
        map(()=>CursosFeatureActions.loadCursosFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });


  constructor(private actions$: Actions, private cursosService:CursosService) {}
}
