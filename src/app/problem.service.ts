import { Injectable } from '@angular/core';
import { Grid } from './grid.model';
import { Rock } from './rock.model';
import { UserGrid } from './user.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProblemService {
  grids: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.grids = database.list('grids');
  }

  grid = new Grid();

  getGrids() {
    return this.grids;
  }
  submitUser(user) {
    this.grids.push(user);
  }

  addGrid(newGrid) {
    this.grids.push(newGrid);
  }

  getGridById(gridId: string){
    return this.database.object('grids/' + gridId);
  }

  deleteGrid(localGridToDelete) {
    let gridEntryInFirebase = this.getGridById(localGridToDelete.$key);
    gridEntryInFirebase.remove();
  }

  //new additions to the service//
  addRocks() {
    for (let i = 0; i < this.grid.board.length; i++) {
        for (let j = 0; j < this.grid.board[i].length; j++) {
          if (this.grid.board[i][j] !== null) {
            this.grid.board[i][j].coordY = i + 1;
            this.grid.board[i][j].coordX = j + 1;
          }
        }
    }
    console.log('addRocks');
    return this.grid.board;
  }

  loopRocks(clickedRock) {
    if (clickedRock === null) {
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
      console.log('loopRocks');
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

}
