import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    LoginModule,
    UsuariosModule
  ],
  exports:[
    
  ]
})
export class FeaturesModule { }
