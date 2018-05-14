import { Component, OnInit } from '@angular/core';
import { Grid } from '../problem.model';
import { Rock } from '../rock.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid = new Grid;

  makeMove() {
    this.grid.moveNum++;
    console.log(this.grid.moveNum);
  }

  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
      console.log(this.grid.board[i]);
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (this.grid.board[i][j] === 'o') {
            this.grid.board[i][j] = new Rock(i + 1, j + 1);
          }
        }
    }
    console.log(this.grid.board);
    this.grid.board;
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
