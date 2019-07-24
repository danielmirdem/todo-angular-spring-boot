import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from "app/services/basic-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   //public isUserLoggedIn: boolean = false;

  constructor(private authenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
