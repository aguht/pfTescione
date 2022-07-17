import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAlumnoByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-info',
  templateUrl: './alumnos-info.component.html',
  styleUrls: ['./alumnos-info.component.scss']
})
export class AlumnosInfoComponent implements OnInit {

  alumno:any=[];
  nombreApellido:string;
  subscriptions:Subscription;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    
    this.store.select(selectAlumnoByIdSuccess).subscribe(
      val=>{this.alumno=val}
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }

}
