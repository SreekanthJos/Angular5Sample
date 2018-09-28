import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceService } from '../../shared/persistance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private persistanceService:PersistanceService) {    
   }

  ngOnInit() {
  }
  logout()
  {
    this.persistanceService.clear();
    this.router.navigate(['/login']);
  }
}
