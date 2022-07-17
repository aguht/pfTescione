import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { CursosFormComponent } from './components/cursos-form/cursos-form.component';
import { CursosInfoComponent } from './components/cursos-info/cursos-info.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCursosFeature from './store/cursos-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosFeatureEffects } from './store/cursos-feature.effects';


@NgModule({
  declarations: [
    CursosEditComponent,
    CursosFormComponent,
    CursosInfoComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature(fromCursosFeature.cursosFeatureFeatureKey, fromCursosFeature.reducer),
    EffectsModule.forFeature([CursosFeatureEffects])
  ]
})
export class CursosModule { }
