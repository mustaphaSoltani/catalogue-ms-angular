import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data) {
this.authService.login(data)
  .subscribe(res => {
    let jwt = res.headers.get('Authorization');
    this.authService.saveToken(jwt);
    this.router.navigateByUrl('/');
  },error => {
    console.log(error);
  });
  }
}
