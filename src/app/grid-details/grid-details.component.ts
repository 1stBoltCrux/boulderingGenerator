import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Grid } from '../grid.model';
import { Rock } from '../rock.model';
import { UserGrid } from '../user.model';
import { ProblemService } from '../problem.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css'],
  providers: [ProblemService]
})
export class GridDetailsComponent implements OnInit {
  grid = new Grid();
  gridId: string;
  gridToDisplay;

  moveNum = 0;

  constructor(private route: ActivatedRoute, private location: Location, private problemService: ProblemService) { }

  makeMove() {
    this.moveNum++;
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

  }

  validEndMove(selectedRock) {
    if (selectedRock.coordinates >= 18) {
    }
  }

  loopRocks(clickedRock) {
    if (clickedRock === null) {
      console.log(null);
    } else {
      for (let i = 0; i < clickedRock.length; i++) {
        for (let j = 0; j < this.grid.board.length; j++) {
          for (let k = 0; k < this.grid.board[j].length; k++) {
            if ((this.grid.board[j][k] !== null && clickedRock[i].coordX === this.grid.board[j][k].coordX ) && (this.grid.board[j][k] !== null && clickedRock[i].coordY === this.grid.board[j][k].coordY )) {
              this.grid.board[j][k].clicked = true;
            }
          }
        }
      }
      console.log(this.grid.board);
      return this.grid.board;
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

  ngOnInit() {
    this.addRocks();

    this.route.params.forEach((urlParameters) => {
      this.gridId = urlParameters['id'];
    });
    // this.gridToDisplay = this.problemService.getGridById(this.gridId);
    this.problemService.getGridById(this.gridId).subscribe(dataLastEmittedFromObserver => {
      this.gridToDisplay = dataLastEmittedFromObserver;
      console.log(this.gridToDisplay.clickedArr);
      this.loopRocks(this.gridToDisplay.clickedArr);
    })
  }

}
