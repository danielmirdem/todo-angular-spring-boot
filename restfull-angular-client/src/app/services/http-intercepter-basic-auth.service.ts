import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from 'app/services/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private authenticationService: BasicAuthenticationService) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.authenticationService.getToken();
    let username = this.authenticationService.getUser();
 
    if (basicAuthHeaderString && username){
      request = request.clone({
        setHeaders :{
          Authorization : basicAuthHeaderString
        }
      });      
    }

    return next.handle(request);
  }	
}

	