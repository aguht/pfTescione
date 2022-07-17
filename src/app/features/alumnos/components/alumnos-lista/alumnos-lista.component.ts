import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { deleteAlumnosFeatures, loadAlumnoByIdFeatures, loadAlumnosFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnosSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss']
})
export class AlumnosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['alumno','mail','telefono','dni','inscripcion','edit','info','delete'];
  alumnoss:any=[];
  subscriptions:Subscription;

  constructor( private store:Store<any>, public authService:AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(loadAlumnosFeatures());
    this.store.select(selectAlumnosSuccess).subscribe(
      (val)=>{
        if(val.alumnos.length>0){
          this.alumnoss=val.alumnos;
        }
      }
    )    
  }

  deleteElement(el:any){
    this.store.dispatch(deleteAlumnosFeatures({id:el.id}))
  }

  getAlumnoDetails(el:any){
    this.store.dispatch(loadAlumnoByIdFeatures({id:el.id}))
  }

  getAlumnoDetails2(el:any){
    this.store.dispatch(loadAlumnoByIdFeatures({id:el.id}));
    
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
