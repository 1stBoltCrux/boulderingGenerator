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
    console.log(this.grid.moveNum)
  }

  addRocks() {
    for (let row in this.grid) {
      if (typeof parseInt(row) === 'number') {
        for (let i = 0; i < this.grid[row].length; i++) {
          if (this.grid[row][i] === 'o') {
            this.grid[row][i] = new Rock(row + ',' + i]);
          }
        }
      }
    }
    console.log(this.grid)
  }

  constructor() { }

  ngOnInit() {
  }

}
