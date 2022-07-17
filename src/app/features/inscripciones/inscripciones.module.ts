import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';
import { RouterModule } from '@angular/router';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromInscripcionesFeature from './store/inscripciones-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesFeatureEffects } from './store/inscripciones-feature.effects';


@NgModule({
  declarations: [
    InscripcionesListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InscripcionesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromInscripcionesFeature.inscripcionesFeatureFeatureKey,fromInscripcionesFeature.reducer),
    EffectsModule.forFeature([InscripcionesFeatureEffects])
  ]
})
export class InscripcionesModule { }
