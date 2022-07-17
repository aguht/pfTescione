import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateCursosFeatures } from '../../store/cursos-feature.actions';
import { selectCursoByIdSuccess } from '../../store/cursos-feature.selectors';

@Component({
  selector: 'app-cursos-edit',
  templateUrl: './cursos-edit.component.html',
  styleUrls: ['./cursos-edit.component.scss']
})
export class CursosEditComponent implements OnInit {

  cursoForm:FormGroup;
  cursoToEdit:any=[];

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.cursoForm=this.fb.group({
      nombre:[''],
      profesor:[''],
      horas:[''],
      info:[''],
      id:['']   
      }
    )

    this.store.select(selectCursoByIdSuccess).subscribe(
      val=>{
        this.cursoToEdit=val
        this.cursoForm.get('nombre')?.patchValue(this.cursoToEdit.nombre);
        this.cursoForm.get('profesor')?.patchValue(this.cursoToEdit.profesor);
        this.cursoForm.get('horas')?.patchValue(this.cursoToEdit.horas);
        this.cursoForm.get('info')?.patchValue(this.cursoToEdit.info);
        this.cursoForm.get('id')?.patchValue(this.cursoToEdit.id)
        }
      )
  }

  
  submit(){
    let cursos:any=[];
    cursos=this.cursoForm.value;
    this.store.dispatch(updateCursosFeatures({cursos}));
    this.router.navigate(['/cursos']);
  }

}