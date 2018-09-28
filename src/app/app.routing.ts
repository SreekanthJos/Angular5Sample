import { Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthgaurdService } from './shared/authgaurd.service';

export const rootRoutes: Routes = [
    { path: 'login', component: LoginComponent,pathMatch:'full'},
   {path:'home',component:HomeComponent,pathMatch: 'full',canActivate:[AuthgaurdService]},
   {path:'', component: LoginComponent,pathMatch:'full'}
  
]

