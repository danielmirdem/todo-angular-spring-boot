import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationBean } from 'app/domain/authentication-bean';
import { API_URL } from 'app/app.constants';

export const TOKEN = 'token';
export const AUTHENTICATER_USER =  'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  public authenticateJWT(username: string, password: string) {

    //return this.http.post<any>(`http://37.187.113.139:8080/authenticate`, //dev
    return this.http.post<any>("/authenticate", //prod
      {username, password}).pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATER_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );  
  }


  public authenticateBasic(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/auth/basicauth`, 
      {headers}).pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATER_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );  
  }

  public hardcodedAuth(username: string, password: string){
    if(username==="daniel" && password === "123") {
      sessionStorage.setItem(AUTHENTICATER_USER, username);
      return true;
    } else {
      return false;
    }
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATER_USER);
    return !(user === null);
  }

  public logoutBasic(){
    this.logout();

    let headers = new HttpHeaders({
      Authorization: 'Basic logout'
    });

    this.http.get<AuthenticationBean>(`${API_URL}/auth/logout`, 
      {headers}).subscribe();      
  }

  public logout(){

    sessionStorage.removeItem(AUTHENTICATER_USER);
    sessionStorage.removeItem(TOKEN);
  }

  public getUser(){
    return sessionStorage.getItem(AUTHENTICATER_USER);  
  }

  public getToken(){
    if (this.getUser())
      return sessionStorage.getItem(TOKEN);  

    return null;
  }

}
