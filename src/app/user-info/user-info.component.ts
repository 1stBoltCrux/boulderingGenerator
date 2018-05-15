import { Component, OnInit } from '@angular/core';
import { Grid } from './../grid.model';
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
    let newGrid: Grid = new Grid(userName, difficulty);
    this.problemService.submitUser(newGrid);
  }
  ngOnInit() {
  }

}
