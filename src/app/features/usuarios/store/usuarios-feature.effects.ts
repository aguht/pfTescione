import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsuariosFeatureActions from './usuarios-feature.actions';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';


@Injectable()
export class UsuariosFeatureEffects {

  loadUsuariosFeatures$=createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosFeatureActions.loadUsuariosFeatures),
      mergeMap(()=>this.usuariosService.getUsuariosList()
      .pipe(
        map(usuarios=>UsuariosFeatureActions.loadUsuariosFeaturesSuccess({usuarios})),
        catchError(()=>EMPTY)
      ))
    );
  });
  
  postUsuariosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(UsuariosFeatureActions.postUsuariosFeatures),
      mergeMap((usuarios)=>this.usuariosService.postUsuarios(usuarios.usuarios)
      .pipe(
        map(()=>UsuariosFeatureActions.loadUsuariosFeatures()),
        catchError(()=>EMPTY)
      ))
    );
  });

  deleteUsuariosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(UsuariosFeatureActions.deleteUsuariosFeatures),
      mergeMap((usuarios)=>this.usuariosService.deleteUsuarios(usuarios.id)
      .pipe(
        map(()=>UsuariosFeatureActions.loadUsuariosFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });

  loadUsuariosDetailedFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(UsuariosFeatureActions.loadUsuarioByIdFeatures),
      mergeMap((usuarios)=>this.usuariosService.getUsuariosDetail(usuarios.id)
      .pipe(
        map((usuariosDetailed)=>UsuariosFeatureActions.loadUsuarioByIdFeaturesSucces({usuariosDetailed})),
        catchError(()=>EMPTY)
     ))
    );
  });

  updateUsuariosFeatures$=createEffect(()=>{
    return this.actions$.pipe(
      ofType(UsuariosFeatureActions.updateUsuariosFeatures),
      mergeMap((usuarios)=>this.usuariosService.updateUsuarios(usuarios.usuarios)
      .pipe(
        map(()=>UsuariosFeatureActions.loadUsuariosFeatures()),
        catchError(()=>EMPTY)
     ))
    );
  });


  constructor(private actions$: Actions, private usuariosService:UsuariosService) {}
}
