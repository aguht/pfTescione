import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateAlumnosFeatures } from '../../store/alumnos-feature.actions';
import { selectAlumnoByIdSuccess } from '../../store/alumnos-feature.selectors';

@Component({
  selector: 'app-alumnos-edit',
  templateUrl: './alumnos-edit.component.html',
  styleUrls: ['./alumnos-edit.component.scss']
})
export class AlumnosEditComponent implements OnInit {

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
      avatar:[''],
      id:['']
      }
    )

    this.store.select(selectAlumnoByIdSuccess).subscribe(
      val=>{
        this.alumnoToEdit=val
        this.alumnoForm.get('nombre')?.patchValue(this.alumnoToEdit.nombre);
        this.alumnoForm.get('apellido')?.patchValue(this.alumnoToEdit.apellido);
        this.alumnoForm.get('email')?.patchValue(this.alumnoToEdit.email);
        this.alumnoForm.get('telefono')?.patchValue(this.alumnoToEdit.telefono);
        this.alumnoForm.get('direccion')?.patchValue(this.alumnoToEdit.direccion);
        this.alumnoForm.get('dni')?.patchValue(this.alumnoToEdit.dni);
        this.alumnoForm.get('avatar')?.patchValue(this.alumnoToEdit.avatar);
        this.alumnoForm.get('id')?.patchValue(this.alumnoToEdit.id);
        }
      )
  }

  submit(){
    let alumnos:any=[];
    alumnos=this.alumnoForm.value;
    this.store.dispatch(updateAlumnosFeatures({alumnos}));
    this.router.navigate(['/alumnos']);
  }

}
