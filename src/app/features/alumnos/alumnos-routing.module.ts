import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosEditComponent } from './components/alumnos-edit/alumnos-edit.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { AlumnosInfoComponent } from './components/alumnos-info/alumnos-info.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  {path:'',component:AlumnosListaComponent},
  {path:'form',component:AlumnosFormComponent},
  {path:'info',component:AlumnosInfoComponent},
  {path:'edit',component:AlumnosEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
