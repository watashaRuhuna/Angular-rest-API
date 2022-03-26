import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  styleUrls:[ "./login.component.css"],
  templateUrl: "./login.component.html"
})

export class LoginComponent {

  public email: string = "";
  public password: string = "";
  public isloading: boolean = false;


  constructor(public service: LoginService, public router: Router) {
  }

  login() {
    if (this.email.trim() != '' && this.password.trim() != "")
      this.router.navigate(["/Dash"]);
    else {
      alert("You need to fill both fields!")
    }

  }
}
