import {Component, trigger, state, style, transition, animate} from '@angular/core';
import {HeaderComponent} from './components/header/header.component'
import { PersistanceService } from './shared/persistance.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';  
  constructor(private persistanceService:PersistanceService) {    
  }
}
