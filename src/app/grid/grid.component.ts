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
    this.grid.moveNum++;
  }

  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (this.grid.board[i][j] !== null) {
            console.log(this.grid.board);
            this.grid.board[i][j].coordX = i + 1;
            this.grid.board[i][j].coordY = j + 1;
          }
        }
    }
    console.log(this.grid.board);
    return this.grid.board;
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
    this.addRocks();
  }

}
