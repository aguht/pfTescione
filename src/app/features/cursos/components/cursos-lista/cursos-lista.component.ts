import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updateAlumnosFeatures } from 'src/app/features/alumnos/store/alumnos-feature.actions';
import { selectAlumnoByIdSuccess } from 'src/app/features/alumnos/store/alumnos-feature.selectors';
import { postInscripcionesFeatures } from 'src/app/features/inscripciones/store/inscripciones-feature.actions';
import { deleteCursosFeatures, loadCursoByIdFeatures, loadCursosFeatures } from '../../store/cursos-feature.actions';
import { selectCursosSuccess } from '../../store/cursos-feature.selectors';
import { selectorUsuarioActivo } from 'src/app/features/login/store/login-feature.selectors';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  displayedColumns=['nombre','profesor','horas','inscripcion','edit','info','delete'];
  cursoss:any=[];
  subscriptions:Subscription;
  
  constructor(private store:Store<any>, private router:Router, public authService:AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(loadCursosFeatures());
    this.store.select(selectCursosSuccess).subscribe(
      (val)=>{
        if(val.cursos.length>0){
          this.cursoss=val.cursos;
        }
      }
    )
  }

  deleteElement(el:any){
    this.store.dispatch(deleteCursosFeatures({id:el.id}))
  }

  getCursoDetails(el:any){
    this.store.dispatch(loadCursoByIdFeatures({id:el.id}))
  }

  crearInscripcion(el:any){
    let inscripcion:any={};
    let alumnos:any=[];
    let aux:any=[];
    let usuarioActivo:any=[];
    this.store.select(selectAlumnoByIdSuccess).subscribe(
      val=>{
        aux=val}
    )
    var values = JSON.parse(localStorage.getItem('session') || 'true');
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      if (values.usuario !== undefined) {
        usuarioActivo = values.usuario;
      } else {
        usuarioActivo = data.usuarioActivo;
      }
    });
    alumnos={...aux};
    alumnos.curso=el.nombre;
    inscripcion.nombreAlumno=alumnos.nombre + ' ' + alumnos.apellido;
    inscripcion.nombreCurso=el.nombre;
    inscripcion.user=usuarioActivo.user;
    inscripcion.fecha=Date.now();
    this.store.dispatch(postInscripcionesFeatures({inscripciones:inscripcion}));
    this.store.dispatch(updateAlumnosFeatures({alumnos}));
    this.router.navigate(['/inscripciones']);
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
