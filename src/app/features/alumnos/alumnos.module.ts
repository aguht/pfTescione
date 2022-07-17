import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosEditComponent } from './components/alumnos-edit/alumnos-edit.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { AlumnosInfoComponent } from './components/alumnos-info/alumnos-info.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosFeatureEffects } from './store/alumnos-feature.effects';
import * as fromAlumnosFeature from './store/alumnos-feature.reducer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlumnosEditComponent,
    AlumnosFormComponent,
    AlumnosInfoComponent,
    AlumnosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromAlumnosFeature.alumnosFeatureFeatureKey,fromAlumnosFeature.reducer),
    EffectsModule.forFeature([AlumnosFeatureEffects])
  ]
})
export class AlumnosModule { }
