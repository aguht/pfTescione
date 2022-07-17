import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCursoByIdSuccess } from '../../store/cursos-feature.selectors';

@Component({
  selector: 'app-cursos-info',
  templateUrl: './cursos-info.component.html',
  styleUrls: ['./cursos-info.component.scss']
})
export class CursosInfoComponent implements OnInit {

  curso:any=[];
  subscriptions:Subscription;
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    
    this.store.select(selectCursoByIdSuccess).subscribe(
      val=>{this.curso=val}
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
}
