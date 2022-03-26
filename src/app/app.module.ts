import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent} from "./Dashboard/dashboard.component";
import { LoginComponent } from "./Login/login.component"
import { AppRoutingModule } from './app-routing.module';
import { HttpClient,HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoadingComponent } from "./Loading/loading.component";
import {LoginService} from "./Login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
