import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor() { }

  public authenticate(username: string, password: string): boolean {

    if(username==="daniel" && password === "dummy") {
      sessionStorage.setItem("authenticaterUser", username);
      return true;
    } else {
      return false;
    }
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null);
  }

  public logout(){
    sessionStorage.removeItem("authenticaterUser");
  }
}
