import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'catalogueWebApp1';
  constructor(private authService: AuthentificationService) {
  }
  ngOnInit(): void {
    this.authService.loadToken();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
  isAuthentificated() {
    return this.authService.isAuthentificated();
  }

  logOut() {
this.authService.logOut();
  }
}
