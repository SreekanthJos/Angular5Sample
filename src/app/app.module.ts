import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PersistanceService } from "./shared/persistance.service";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { rootRoutes } from "./app.routing";
import { AuthgaurdService } from "./shared/authgaurd.service";


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(rootRoutes,{useHash:true})
  
  ],
  providers: [PersistanceService,AuthgaurdService],
  bootstrap: [AppComponent]
})
export class AppModule {}
