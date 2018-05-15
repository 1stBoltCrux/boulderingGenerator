import { Injectable } from '@angular/core';
import { Grid } from './grid.model';
import { Rock } from './rock.model';
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

  submitUser(user) {
    this.grids.push(user);
  }

  addGrid(newGrid) {
    this.grids.push(newGrid);
  }
}
