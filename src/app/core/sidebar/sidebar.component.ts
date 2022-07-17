import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  

  
  constructor(private router:Router, public authService:AuthService) { }

  ngOnInit(): void { }

  nuevoE(){
    this.router.navigate(['/form/form']);
  }

  showList(){
    this.router.navigate(['/lista/alumnos'])
  }


}
