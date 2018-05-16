import { Component, DoCheck } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements DoCheck{

  private user;
  private isLoggedIn: Boolean = null;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
        this.router.navigate([''])
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['admin']);
      }
    });
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
