import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid.model';
import { Rock } from '../rock.model';
import { ProblemService } from '../problem.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ProblemService]
})
export class GridComponent implements OnInit {
  grid = new Grid('new board', 'easy');

  makeMove() {
    this.moveNum++;
  }
  moveNum = 0;

  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (this.grid.board[i][j] !== null) {
            this.grid.board[i][j].coordX = i + 1;
            this.grid.board[i][j].coordY = j + 1;
          }
        }
    }
    return this.grid.board;
  }

  validMove(selectedRock) {
    if (selectedRock === null || this.moveNum === 14) {
      return;
    } else if (selectedRock.coordY < 7 && this.grid.moveNum < 2 && selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    } else if (selectedRock.clicked === false) {
      selectedRock.clicked = true;
      this.makeMove();
    }
    console.log(selectedRock);
    console.log(this.moveNum);
  }


  validEndMove(selectedRock) {
    if (selectedRock.coordinates >= 18) {
    }
  }

  setClass(item) {
    if (item === null) {
      console.log(item);
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
