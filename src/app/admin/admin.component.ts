import { Component } from '@angular/core';
import { Grid } from '../grid.model';
import { ProblemService } from '../problem.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProblemService, AuthenticationService]
})
export class AdminComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(private problemService: ProblemService, public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
         this.isLoggedIn = false;
         this.router.navigate(['']);
       } else {
         this.isLoggedIn = true;
       }
    });    
  }
}
