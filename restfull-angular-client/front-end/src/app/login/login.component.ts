import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "daniel";
  public password: string = "123";
  public invalidLogin: boolean = false;
  public errorMessage: string = "Invalid Credentials";

  constructor(private router: Router, private authentificationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  public handleLogin(){
    if(this.authentificationService.authenticate(this.username, this.password)) {
      console.log(this.username);
      this.invalidLogin = false;
      this.router.navigate(["welcome", this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
