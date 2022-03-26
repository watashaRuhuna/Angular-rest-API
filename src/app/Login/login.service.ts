import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()  //injectable is the word use for metadata of services

export class LoginService{



  constructor(public http:HttpClient) {
  }
    login(email:string, password:string){
      this.http.post("http://student-api.treinetic.xyz/api/v1.0/user/login",{
        "email":email,
        "password":password
      });
    }
  }


