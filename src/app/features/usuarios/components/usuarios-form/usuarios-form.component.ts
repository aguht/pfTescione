import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { postUsuariosFeatures } from '../../store/usuarios-feature.actions';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  usuarioForm:FormGroup;
  usuarioToEdit:any=[];

  constructor(private fb: FormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.usuarioForm=this.fb.group({
      user:[''],
      pass:[''],
      nombre:[''],
      email:[''],
      rol:['']    
      }
    )
  }

  submit(){
    let usuarios:any=[];
    usuarios=this.usuarioForm.value;
    this.store.dispatch(postUsuariosFeatures({usuarios:usuarios}));
    this.router.navigate(['/usuarios']);
  }

}