import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";


const routes: Routes =[                   //here the router path

  { path:"login", component:LoginComponent},
  { path:"dash", component:DashboardComponent},
  { path:"", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
