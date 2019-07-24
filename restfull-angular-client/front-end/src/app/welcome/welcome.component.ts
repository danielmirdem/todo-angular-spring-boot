import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public name: string = '';
  public welcomeMessageFromService: string = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService) { 

  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  public getWelcomeMessage() {
    this.welcomeService.helloWorldBeanService().subscribe(
      response => this.welcomeMessageFromService = response.text,
      error => this.welcomeMessageFromService = error.error.message    
    );
  }

  public getWelcomeMessageWithParVar() {
    this.welcomeService.helloWorldBeanServicePathVar(this.name).subscribe(
      response => this.welcomeMessageFromService = response.text,
      error => this.welcomeMessageFromService = error.error.message    
    );
  }

}
