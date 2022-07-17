import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../shared/material.module';
import { FrontComponent } from './front/front.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FrontComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FrontComponent
  ]
})
export class CoreModule { }
