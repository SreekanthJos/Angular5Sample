import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserModel} from '../../models/user.model'
import { PersistanceService } from '../../shared/persistance.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel=new UserModel();
  token: UserModel;
  constructor(private router:Router,private persistanceService:PersistanceService) {

    if(this.persistanceService.isAuthenticated()){
      this.router.navigate(["/home"]);
    }
   }

  ngOnInit() {
  }

  login()
  {
    this.token=this.user;
    this.persistanceService.set("user", this.token);
    this.router.navigate(['/home']);
  }
}
