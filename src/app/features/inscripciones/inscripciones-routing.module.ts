import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesListaComponent } from './components/inscripciones-lista/inscripciones-lista.component';

const routes: Routes = [
  {path:'',component:InscripcionesListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
