import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnionPipe } from './pipes/union.pipe';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    UnionPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    UnionPipe,
    MaterialModule,
  ]
})
export class SharedModule { }
