import { Component, OnInit } from '@angular/core';
import { UserGrid } from './../user.model';
import { ProblemService } from './../problem.service';
import { GridComponent } from '../grid/grid.component';
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

  createUser(grid, userName: string, difficulty: string) {
    grid.name = userName;
    grid.difficulty = difficulty;
    console.log(grid);
  }

  makeMove() {
    this.grid.moveNum++;
  }

  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (this.grid.board[i][j] !== null) {
            this.grid.board[i][j].coordY = i + 1;
            this.grid.board[i][j].coordX = j + 1;
          }
        }
    }
    return this.grid.board;
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

    for (let i = 0; i < this.grid.board.length; i++) {
      for (let j = 0; j < this.grid.board[i].length; j++) {
        if (this.grid.board[i][j] !== null && this.grid.board[i][j].clicked) {
          obj.clickedArr.push(this.grid.board[i][j]);
        }
      }
    }
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


  highlight(rock) {
    if (rock === null) {
      console.log();
    } else if (rock.clicked === true && rock.coordY > 14) {
      return 'bg-success';
    } else if (rock.clicked === true && rock.coordY > 1) {
      return 'bg-info';
    } else if (rock.clicked === true && rock.coordY === 1) {
      return 'bg-danger';
    } else if (rock.clicked === false) {
      return '';
    }
  }

  setClass(item) {
    if (item === null) {
    } else if (item.color === 'orange') {
      return 'hold-1';
    } else if (item.color === 'darkblue') {
      return 'hold-2';
    } else if (item.color === 'yellow') {
      return 'hold-3';
    } else if (item.color === 'teal') {
      return 'hold-4';
    } else if (item.color === 'white') {
      return 'hold-5';
    }
  }

  userCheck() {
    return this.newGrid.name !== 'userName'? true: false;
  }



  ngOnInit() {
    this.addRocks();
  }

}
