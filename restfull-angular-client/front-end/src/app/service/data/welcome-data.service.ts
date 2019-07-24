import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor (public text: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  public helloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://35.243.246.96:8080/hello-world-bean');    
  }

  public helloWorldBeanServicePathVar(name) {
    return this.http.get<HelloWorldBean>(`http://35.243.246.96:8080/hello-world-bean/path-variable/${name}`);    
  }

}
