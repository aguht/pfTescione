import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { CursosModule } from './features/cursos/cursos.module';
import { InscripcionesModule } from './features/inscripciones/inscripciones.module';
import { LoginComponent } from './features/login/components/login/login.component';
import { LoginModule } from './features/login/login.module';
import { UsuariosModule } from './features/usuarios/usuarios.module';
import { AdminGuard } from './shared/guards/admin.guard';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {path:'alumnos', loadChildren:()=>import('./features/alumnos/alumnos.module').then(m=>AlumnosModule), canActivate:[LoginGuard]},
  {path:'cursos', loadChildren:()=>import('./features/cursos/cursos.module').then(m=>CursosModule), canActivate:[LoginGuard]},
  {path:'inscripciones', loadChildren:()=>import('./features/inscripciones/inscripciones.module').then(m=>InscripcionesModule), canActivate:[LoginGuard]},
  {path:'login', loadChildren:()=>import('./features/login/login.module').then(m=>LoginModule), pathMatch: 'full'},
  {path:'usuarios', loadChildren:()=>import('./features/usuarios/usuarios.module').then(m=>UsuariosModule), canActivate:[LoginGuard, AdminGuard]},
  {path:'', component: LoginComponent, pathMatch:'full', canActivate:[LoginGuard]},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
