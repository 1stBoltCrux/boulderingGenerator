import { Injectable } from '@angular/core';
import { Grid } from './problem.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProblemService {
  grids: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.grids = database.list('grids');
  }

  getGrids() {
    return this.grids;
  }

  addGrid(newGrid: Grid) {
    this.grids.push(newGrid);
  }

}
