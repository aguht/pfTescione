import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUsuariosFeatures } from '../../store/usuarios-feature.actions';
import { selectUsuarioByIdSuccess } from '../../store/usuarios-feature.selectors';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.scss']
})
export class UsuariosEditComponent implements OnInit {

  usuarioForm:UntypedFormGroup;
  usuarioToEdit:any=[];

  constructor(private fb: UntypedFormBuilder, private store: Store, private router:Router) { }

  ngOnInit(): void {
    this.usuarioForm=this.fb.group({
      user:[''],
      pass:[''],
      nombre:[''],
      email:[''],
      id:[''],
      rol:['']
      }
    )

    this.store.select(selectUsuarioByIdSuccess).subscribe(
      val=>{
        this.usuarioToEdit=val
        this.usuarioForm.get('user')?.patchValue(this.usuarioToEdit.user);
        this.usuarioForm.get('pass')?.patchValue(this.usuarioToEdit.pass);
        this.usuarioForm.get('nombre')?.patchValue(this.usuarioToEdit.nombre);
        this.usuarioForm.get('email')?.patchValue(this.usuarioToEdit.email);
        this.usuarioForm.get('id')?.patchValue(this.usuarioToEdit.id);
        this.usuarioForm.get('rol')?.patchValue(this.usuarioToEdit.rol)
        }
      )
  }

  
  submit(){
    let usuarios:any=[];
    usuarios=this.usuarioForm.value;
    this.store.dispatch(updateUsuariosFeatures({usuarios}));
    this.router.navigate(['/usuarios']);
  }

}