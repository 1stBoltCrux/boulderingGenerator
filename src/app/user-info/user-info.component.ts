import { Component, OnInit } from '@angular/core';
import { UserGrid } from './../user.model';
import { ProblemService } from './../problem.service';
import { Grid } from '../grid.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [ProblemService]
})
export class UserInfoComponent implements OnInit {

  constructor(private problemService: ProblemService) { }

    newGrid: UserGrid = new UserGrid('userName', 'difficulty');
    grid = new Grid();
    secondGrid;

  createUser(grid, userName: string, difficulty: string) {
    grid.name = userName;
    grid.difficulty = difficulty;
    console.log(grid);
  }

  makeMove() {
    this.grid.moveNum++;
  }

  validMove(selectedRock) {
    if (selectedRock === null || this.grid.moveNum === 14) {
      if (selectedRock.clicked === true ) {
        selectedRock.clicked = false;
        this.grid.moveNum--;
      }
    } else if (selectedRock.coordY < 7 && this.grid.moveNum < 2 && selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    } else if (selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    } else if (selectedRock.clicked === true) {
      selectedRock.clicked = false;
      this.grid.moveNum--;
    }
  }

  clickedRocks(obj) {
    console.log(this.secondGrid)
    for (let i = 0; i < this.secondGrid.length; i++) {
      for (let j = 0; j < this.secondGrid[i].length; j++) {
        if (this.secondGrid[i][j] !== null && this.secondGrid[i][j].clicked) {
          obj.clickedArr.push(this.secondGrid[i][j]);
        }
      }
    }
    console.log(obj.clickedArr);
    return obj.clickedArr;
  }

  clearBoard() {
    for (let i = 0; i < this.grid.board.length; i++) {
      for (let j = 0; j < this.grid.board[i].length; j++) {
        if (this.grid.board[i][j] !== null) {
          this.grid.board[i][j].clicked = false;
        } else {
          console.log();
        }
      }
    }
  }

  submitRoute() {
    this.clickedRocks(this.newGrid);
    this.problemService.addGrid(this.newGrid);
    this.newGrid.name = 'userName';
    this.newGrid.difficulty = 'difficulty';
    this.grid.moveNum = 0;
    this.clearBoard();
  }

  validEndMove(selectedRock) {
    if (selectedRock.coordinates >= 18) {
    }
  }

  userCheck() {
    return this.newGrid.name !== 'userName'? true: false;
  }

  ngOnInit() {
    this.secondGrid = this.problemService.addRocks();
  }

}
