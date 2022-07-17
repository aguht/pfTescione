import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteUsuariosFeatures, loadUsuariosFeatures, loadUsuarioByIdFeatures } from '../../store/usuarios-feature.actions';
import { selectUsuariosSuccess } from '../../store/usuarios-feature.selectors';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  nombreApellido:string;
  displayedColumns=['usuario','nombre','rol','edit','info','delete'];
  usuarioss:any=[];
  subscriptions:Subscription;

  constructor( private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsuariosFeatures());
    this.store.select(selectUsuariosSuccess).subscribe(
      (val)=>{
        if(val.usuarios.length>0){
          this.usuarioss=val.usuarios;
        }
      }
    )
  }

  deleteElement(el:any){
    this.store.dispatch(deleteUsuariosFeatures({id:el.id}))
  }

  getUsuarioDetails(el:any){
    this.store.dispatch(loadUsuarioByIdFeatures({id:el.id}))
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}