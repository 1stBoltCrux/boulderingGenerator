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
<<<<<<< HEAD
=======

  getGridById(gridId: string){
    return this.database.object('grids/' + gridId);
  }
>>>>>>> 6e6c2fb559ceab36687c5b43dc51fc1e067026ad
}
