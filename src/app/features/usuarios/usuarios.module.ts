import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { UsuariosInfoComponent } from './components/usuarios-info/usuarios-info.component';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromUsuariosFeature from './store/usuarios-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsuariosFeatureEffects } from './store/usuarios-feature.effects';


@NgModule({
  declarations: [
    UsuariosEditComponent,
    UsuariosFormComponent,
    UsuariosInfoComponent,
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuariosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromUsuariosFeature.usuariosFeatureFeatureKey,fromUsuariosFeature.reducer),
    EffectsModule.forFeature([UsuariosFeatureEffects])
  ]
})
export class UsuariosModule { }
