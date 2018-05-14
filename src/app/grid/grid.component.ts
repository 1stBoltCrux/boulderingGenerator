import { Component, OnInit } from '@angular/core';
import { Grid } from '../problem.model';

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
    this.grid.moveNum++;
    console.log(this.grid.moveNum);
  }

  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (typeof this.grid.board[i][j] === 'object') {
            this.grid.board[i][j].coordX = i;
            this.grid.board[i][j].coordY = j;
          }
        }
    }
    console.log(this.grid.board);
  }

  validFirstMove(selectedRock) {
    if (selectedRock.coordinates < 7 && this.grid.moveNum < 2) {
      selectedRock.clicked = true;
    } else {
      selectedRock.clicked = false;
    }
  }

  validEndMove(selectedRock) {
    if (selectedRock.coordinates >= 18) {
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
