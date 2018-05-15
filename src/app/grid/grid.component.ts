import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid.model';
import { Rock } from '../rock.model';
import { ProblemService } from '../problem.service';
import { UserGrid } from '../user.model';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ProblemService]
})
export class GridComponent implements OnInit {
  grid = new Grid();
  newUser = new UserGrid('new user', 'easy');

  makeMove() {
    this.moveNum++;
  }
  moveNum = 0;

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
    if (selectedRock === null || this.moveNum === 14) {
      if (selectedRock.clicked === true ) {
        selectedRock.clicked = false;
        this.moveNum--;
      }
    } else if (selectedRock.coordY < 7 && this.grid.moveNum < 2 && selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    } else if (selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    } else if (selectedRock.clicked === true) {
      selectedRock.clicked = false;
      this.moveNum--;
    }
    // console.log(selectedRock);
    console.log(this.moveNum);
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

  constructor() { }

  ngOnInit() {
    this.addRocks();
  }

}
