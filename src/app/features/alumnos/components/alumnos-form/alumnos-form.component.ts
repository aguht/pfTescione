import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { postAlumnosFeatures } from '../../store/alumnos-feature.actions';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {

  alumnoForm:UntypedFormGroup;
  alumnoToEdit:any=[];

  constructor(private fb: UntypedFormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.alumnoForm=this.fb.group({
      nombre:[''],
      apellido:[''],
      email:[''],
      telefono:[''],
      direccion:[''],
      dni:[''],
      avatar:['']      
      }
    )
  }

  submit(){
    let alumnos:any=[];
    alumnos=this.alumnoForm.value;
    this.store.dispatch(postAlumnosFeatures({alumnos:alumnos}));
    this.router.navigate(['/alumnos']);
  }

}
