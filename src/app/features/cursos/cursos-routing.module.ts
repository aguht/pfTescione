import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { CursosFormComponent } from './components/cursos-form/cursos-form.component';
import { CursosInfoComponent } from './components/cursos-info/cursos-info.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

const routes: Routes = [
  {path:'',component:CursosListaComponent},
  {path:'form',component:CursosFormComponent},
  {path:'info',component:CursosInfoComponent},
  {path:'edit',component:CursosEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
