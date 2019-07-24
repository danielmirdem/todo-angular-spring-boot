import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'app/services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "daniel";
  public password: string = "dummy";
  public invalidLogin: boolean = false;
  public errorMessage: string = "Invalid Credentials";

  constructor(private router: Router, private authentificationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  public handleJwtAuthLogin(){
    this.authentificationService.authenticateJWT(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(["welcome", this.username]);
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );    
  }

  public handleBasicAuthLogin(){
    this.authentificationService.authenticateBasic(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(["welcome", this.username]);
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );    
  }

  public handleHardcodedLogin(){
    if(this.authentificationService.hardcodedAuth(this.username, this.password)) {
      console.log(this.username);
      this.invalidLogin = false;
      this.router.navigate(["welcome", this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
