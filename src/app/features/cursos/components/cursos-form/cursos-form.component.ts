import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { postCursosFeatures } from '../../store/cursos-feature.actions';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  cursoForm:UntypedFormGroup;
  cursoToEdit:any=[];

  constructor(private fb: UntypedFormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.cursoForm=this.fb.group({
      nombre:[''],
      profesor:[''],
      horas:[''],
      info:['']     
      }
    )
  }

  submit(){
    let cursos:any=[];
    cursos=this.cursoForm.value;
    this.store.dispatch(postCursosFeatures({cursos:cursos}));
    this.router.navigate(['/cursos']);
  }

}