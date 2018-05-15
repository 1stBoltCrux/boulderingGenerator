import { Component, OnInit } from '@angular/core';
import { UserGrid } from './../user.model';
import { ProblemService } from './../problem.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [ProblemService]
})
export class UserInfoComponent implements OnInit {

  constructor(private problemService: ProblemService) { }
  submitUserInfo(userName: string, difficulty: string) {
    let newGrid: UserGrid = new UserGrid(userName, difficulty);
    this.problemService.submitUser(newGrid);
  }
  ngOnInit() {
  }

}
